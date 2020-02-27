import * as React from 'react';
import styledComponents from 'styled-components';
import {
  pipe,
  map,
  length,
  prop,
  sortBy,
  pathOr,
  uniqBy,
  concat,
  isNil,
  isEmpty,
  equals,
  lensPath,
  view,
  find,
  filter,
  propEq,
  reverse,
  identity,
} from 'ramda';
import { ApolloConsumer } from 'react-apollo';
import { Checkbox, Panel, FormControl } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';
import * as InfiniteScroll from 'react-infinite-scroller';
import * as FontAwesome from 'react-fontawesome';
import Sorter from './Sorter';
import { capitalize } from 'utils/helpers';

import {
  AggBucket,
  AggCallback,
  AggregateAggCallback,
  SearchParams,
  AggKind,
  maskAgg,
} from '../SearchPage/Types';

import gql from 'graphql-tag';
import aggToField from 'utils/aggs/aggToField';
import aggKeyToInner from 'utils/aggs/aggKeyToInner';
import { FieldDisplay } from 'types/globalTypes';
import SiteProvider from 'containers/SiteProvider';
import {
  SiteViewFragment,
  SiteViewFragment_search_aggs_fields,
} from 'types/SiteViewFragment';
import './AggDropDownStyle.css';

const PAGE_SIZE = 25;

const QUERY_AGG_BUCKETS = gql`
  query SearchPageAggBucketsQuery(
    $agg: String!
    $q: SearchQueryInput!
    $aggFilters: [AggFilterInput!]
    $crowdAggFilters: [AggFilterInput!]
    $page: Int!
    $pageSize: Int!
    $aggOptionsFilter: String
    $aggOptionsSort: [SortInput!]
  ) {
    aggBuckets(
      params: {
        agg: $agg
        q: $q
        sorts: []
        aggFilters: $aggFilters
        crowdAggFilters: $crowdAggFilters
        aggOptionsFilter: $aggOptionsFilter
        aggOptionsSort: $aggOptionsSort
        page: $page
        pageSize: $pageSize
      }
    ) {
      aggs {
        name
        buckets {
          key
          docCount
        }
      }
    }
  }
`;

const QUERY_CROWD_AGG_BUCKETA = gql`
  query SearchPageCrowdAggBucketsQuery(
    $agg: String!
    $q: SearchQueryInput!
    $aggFilters: [AggFilterInput!]
    $crowdAggFilters: [AggFilterInput!]
    $page: Int!
    $pageSize: Int!
    $aggOptionsFilter: String
  ) {
    aggBuckets: crowdAggBuckets(
      params: {
        agg: $agg
        q: $q
        sorts: []
        aggFilters: $aggFilters
        crowdAggFilters: $crowdAggFilters
        aggOptionsFilter: $aggOptionsFilter
        page: $page
        pageSize: $pageSize
      }
    ) {
      aggs {
        buckets {
          key
          docCount
        }
      }
    }
  }
`;

const PanelWrapper = styledComponents.div`
  .flex {
    display:flex;
    justify-content: space-between;
  }
  .checkbox {
    margin: 3px 0px;
  }
  .panel-body {
    padding: 5px;
    overflow-x: auto;
    max-height: 400px;
  }
`;

const PresearchCard = styledComponents.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  border-radius: 12px;
  margin: 10px;
  flex: 1;
  height: 300px;
`;

const PresearchHeader = styledComponents.div`
  background-color: #55b88d;
  padding: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 50px;
`;

const PresearchTitle = styledComponents.div`
  color: white;
  font-size: 25px;
  font-weight: 400;
  margin-left: 5px;
`;

const PresearchBody = styledComponents.div`
  margin-left: 5px;
  height: 240px;
`;

const PresearchFilter = styledComponents.div`
  margin-left: 5px;
  max-height: 30px;
`;

const PresearchPanel = styledComponents.div`
  overflow-x: auto;
  max-height: 190px;
  margin-left: 5px;
  margin-top 30px;
`;

const PresearchContent = styledComponents.div`
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px; 
  background-color: white;
  max-height: 250px;
`;

export enum SortKind {
  Alpha,
  Number,
}

interface AggDropDownState {
  hasMore: boolean;
  isOpen: boolean;
  loading: boolean;
  filter: string;
  buckets: AggBucket[];
  prevParams: SearchParams | null;
  desc: boolean;
  sortKind: SortKind;
  checkboxValue: boolean;
  showLabel: boolean;
}

interface AggDropDownProps {
  agg: string;
  isOpen: boolean;
  buckets?: AggBucket[];
  searchParams: SearchParams;
  aggKind: AggKind;
  selectedKeys: Set<string>;
  addFilter: AggCallback;
  addFilters?: AggregateAggCallback | undefined;
  removeFilters?: AggregateAggCallback | undefined;
  removeFilter: AggCallback | null;
  display?: FieldDisplay;
  visibleOptions?: String[];
  onOpen?: (agg: string, aggKind: AggKind) => void;
  removeSelectAll?: boolean;
  resetSelectAll?: () => void;
  presearch?: boolean;
}

class AggDropDown extends React.Component<AggDropDownProps, AggDropDownState> {
  state = {
    hasMore: true,
    loading: false,
    buckets: [],
    filter: '',
    isOpen: false,
    prevParams: null,
    sortKind: SortKind.Alpha,
    desc: true,
    checkboxValue: false,
    showLabel: false,
  };

  static getDerivedStateFromProps(
    props: AggDropDownProps,
    state: AggDropDownState
  ) {
    if (props.isOpen !== state.isOpen) {
      if (props.isOpen) {
        return {
          hasMore: true,
          loading: false,
          buckets: [],
          filter: '',
          isOpen: props.isOpen,
          prevParams: props.searchParams,
        };
      }
      return {
        hasMore: true,
        loading: false,
        buckets: props.buckets,
        filter: '',
        isOpen: props.isOpen,
        prevParams: props.searchParams,
      };
    }

    const findAgg = (searchParams: SearchParams | null) => {
      if (!searchParams) return null;

      const key = props.aggKind === 'aggs' ? 'aggFilters' : 'crowdAggFilters';
      return find(agg => agg.field === props.agg, searchParams[key]);
    };
    const prevAggValue = findAgg(state.prevParams);
    const nextAggValue = findAgg(props.searchParams);

    if (
      state.isOpen &&
      !equals(state.prevParams, props.searchParams) &&
      equals(prevAggValue, nextAggValue)
    ) {
      return {
        hasMore: true,
        loading: false,
        buckets: props.buckets,
        filter: '',
        isOpen: props.isOpen,
        prevParams: props.searchParams,
      };
    }

    return null;
  }

  // getBucketKey = (key: string): string => path([key, 'key'], this.props.buckets)
  // getBucketDocCount = (key: string): number => path([key, 'docCount'], this.props.buckets)
  isSelected = (key: string): boolean =>
    this.props.selectedKeys && this.props.selectedKeys.has(key);
  toggleAgg = (agg: string, key: string): void => {
    if (!this.props.addFilter || !this.props.removeFilter) return;
    return this.isSelected(key)
      ? this.props.removeFilter(agg, key)
      : this.props.addFilter(agg, key);
  };
  selectAll = (agg: string): void => {
    const { buckets } = this.state;
    let newParams = [];

    buckets.map(({ key }) => {
      newParams.push(key);
    });

    if (this.props.removeSelectAll) {
      this.setState({
        checkboxValue: false,
      });
    }
    if (this.isAllSelected() != true) {
      if (!this.props.addFilters) return;
      this.props.addFilters(agg, newParams, false);
      this.setState({
        checkboxValue: true,
      });
    } else {
      if (!this.props.removeFilters) return;
      this.setState({
        checkboxValue: false,
      });
      this.props.removeFilters(agg, newParams, false);
    }
  };
  isAllSelected = (): boolean => {
    const { buckets } = this.state;
    let i = 0;
    let newParams = [];
    buckets.map(({ key }) => {
      if (this.isSelected(key)) {
        i++;
      }
    });
    if (buckets.length == i) {
      return true;
    }
    return false;
  };

  getFullPagesCount = () => Math.floor(length(this.state.buckets) / PAGE_SIZE);

  handleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({ filter: value, buckets: [], hasMore: true });
  };

  handleToggle = () => {
    this.props.onOpen && this.props.onOpen(this.props.agg, this.props.aggKind);
  };

  handleLoadMore = async apolloClient => {
    const { desc, sortKind } = this.state;
    const [query, filterType] =
      this.props.aggKind === 'crowdAggs'
        ? [QUERY_CROWD_AGG_BUCKETA, 'crowdAggFilters']
        : [QUERY_AGG_BUCKETS, 'aggFilters'];

    let aggSort = [{ id: 'key', desc: false }];

    if (!desc && sortKind === SortKind.Alpha) {
      aggSort = [{ id: 'key', desc: true }];
    }

    if (desc && sortKind === SortKind.Number) {
      aggSort = [{ id: 'count', desc: false }];
    }

    if (!desc && sortKind === SortKind.Number) {
      aggSort = [{ id: 'count', desc: true }];
    }

    const variables = {
      ...this.props.searchParams,
      aggFilters: maskAgg(this.props.searchParams.aggFilters, this.props.agg),
      crowdAggFilters: maskAgg(
        this.props.searchParams.crowdAggFilters,
        this.props.agg
      ),
      agg: this.props.agg,
      pageSize: PAGE_SIZE,
      page: this.getFullPagesCount(),
      aggOptionsFilter: this.state.filter,
      aggOptionsSort: aggSort,
    };

    const response = await apolloClient.query({
      query,
      variables,
    });

    const newBuckets = pathOr(
      [],
      ['data', 'aggBuckets', 'aggs', 0, 'buckets'],
      response
    ) as AggBucket[];

    let buckets = pipe(
      concat(newBuckets),
      uniqBy(prop('key')),
      sortBy(prop('key'))
      // desc ? identity() : reverse(),
    )(this.state.buckets) as AggBucket[];
    if (!desc && sortKind === SortKind.Alpha) {
      buckets = pipe(
        concat(newBuckets),
        uniqBy(prop('key')),
        sortBy(prop('key')),
        reverse()
      )(this.state.buckets) as AggBucket[];
    }
    if (desc && sortKind === SortKind.Number) {
      buckets = pipe(
        concat(newBuckets),
        uniqBy(prop('key')),
        sortBy(prop('docCount'))
      )(this.state.buckets) as AggBucket[];
    }
    if (!desc && sortKind === SortKind.Number) {
      buckets = pipe(
        concat(newBuckets),
        uniqBy(prop('key')),
        sortBy(prop('docCount')),
        reverse()
      )(this.state.buckets) as AggBucket[];
    }

    const hasMore = length(this.state.buckets) !== length(buckets);
    this.setState({ buckets, hasMore });
  };

  renderBucket = (
    value: string | number,
    display: FieldDisplay,
    docCount: number
  ): React.ReactNode => {
    let text = '';
    switch (display) {
      case FieldDisplay.STAR:
        text = {
          0: '☆☆☆☆☆',
          1: '★☆☆☆☆',
          2: '★★☆☆☆',
          3: '★★★☆☆',
          4: '★★★★☆',
          5: '★★★★★',
        }[value];
        break;
      case FieldDisplay.DATE:
        text = new Date(parseInt(value.toString(), 10))
          .getFullYear()
          .toString();
        break;
      default:
        text = value.toString();
    }
    return `${text} (${docCount})`;
  };

  renderBuckets = ({
    display,
    site,
    field,
  }: {
    display: FieldDisplay;
    site: SiteViewFragment;
    field: SiteViewFragment_search_aggs_fields | any;
  }) => {
    const { agg, visibleOptions = [] } = this.props;
    const { buckets = [] } = this.state;
    return pipe(
      filter(({ key }) =>
        visibleOptions.length ? visibleOptions.includes(key) : true
      ),
      map(({ key, docCount }) => {
        return (
          <Checkbox
            key={`key-${key}-${docCount}`}
            checked={this.isSelected(key)}
            onChange={() => this.toggleAgg(agg, key)}>
            {this.renderBucket(key, display, docCount)}
          </Checkbox>
        );
      })
    )(buckets);
  };

  renderBucketsPanel = (apolloClient, site: SiteViewFragment) => {
    let display = this.props.display;
    const field = find(propEq('name', this.props.agg), [
      ...site.search.aggs.fields,
      ...site.search.crowdAggs.fields,
    ]) as SiteViewFragment_search_aggs_fields | null;
    if (!display) {
      display = (field && field.display) || FieldDisplay.STRING;
    }
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => this.handleLoadMore(apolloClient)}
        hasMore={this.state.hasMore}
        useWindow={false}
        loader={
          <div key={0} style={{ display: 'flex', justifyContent: 'center' }}>
            <BeatLoader key="loader" color="#fff" />
          </div>
        }>
        {this.renderBuckets({ display, site, field })}
      </InfiniteScroll>
    );
  };

  renderFilter = () => {
    const { buckets = [], filter, desc, sortKind } = this.state;
    const { agg } = this.props;
    if (length(buckets) <= 10 && (isNil(filter) || isEmpty(filter))) {
      return null;
    }
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderBottom: 'solid 1px #ddd',
        }}>
        <div style={{ marginTop: '1em' }}>
          <Checkbox
            checked={
              this.props.removeSelectAll
                ? this.checkSelect()
                : this.state.checkboxValue
            }
            onChange={() => this.selectAll(agg)}
            onMouseEnter={() => this.setState({ showLabel: true })}
            onMouseLeave={() => this.setState({ showLabel: false })}>
            {this.state.showLabel ? (
              <span
                style={{
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  border: '1px solid #ccc',
                  padding: '5px',
                  position: 'absolute',
                  left: '1em',
                  width: '6em',
                  color: 'black',
                  background: 'white',
                  borderRadius: '4px',
                  fontSize: '0.85em',
                }}>
                Select All
              </span>
            ) : null}
          </Checkbox>
        </div>

        <div
          style={{
            flex: 2,
            justifyContent: 'space-around',
            alignItems: 'center',
            display: 'flex',
          }}>
          <Sorter
            type="alpha"
            desc={desc}
            active={sortKind === SortKind.Alpha}
            toggle={this.toggleAlphaSort}
          />
          <Sorter
            type="number"
            desc={desc}
            active={sortKind === SortKind.Number}
            toggle={this.toggleNumericSort}
          />
        </div>
        <FormControl
          type="text"
          placeholder="filter..."
          value={this.state.filter}
          onChange={this.handleFilterChange}
          style={{ flex: 4, marginTop: '4px' }}
        />
      </div>
    );
  };

  toggleAlphaSort = () => {
    this.setState({
      desc: !this.state.desc,
      sortKind: SortKind.Alpha,
      buckets: [],
      hasMore: true,
    });
  };

  toggleNumericSort = () => {
    this.setState({
      desc: !this.state.desc,
      sortKind: SortKind.Number,
      buckets: [],
      hasMore: true,
    });
  };

  checkSelect = () => {
    if (this.props.removeSelectAll) {
      this.setState(
        {
          checkboxValue: false,
        },
        () => {
          if (this.props.resetSelectAll != null) {
            this.props.resetSelectAll();
          }
        }
      );
    }
  };

  renderPresearchFilter = (apollo, siteView) => {
    const { buckets = [], filter } = this.state;
    if (length(buckets) <= 10 && (isNil(filter) || isEmpty(filter))) {
      return (
        <PresearchContent>
          <PresearchBody>
            {this.renderBucketsPanel(apollo, siteView)}
          </PresearchBody>
        </PresearchContent>
      );
    } else
      return (
        <PresearchContent>
          <PresearchFilter>{this.renderFilter()}</PresearchFilter>
          <PresearchPanel>
            {this.renderBucketsPanel(apollo, siteView)}
          </PresearchPanel>
        </PresearchContent>
      );
  };

  render() {
    const { agg, presearch } = this.props;
    const { buckets = [], filter, desc, sortKind, isOpen } = this.state;
    const title = aggToField(agg);

    const icon = `chevron${isOpen ? '-up' : '-down'}`;
    if (presearch) {
      return (
        <SiteProvider>
          {site => (
            <ApolloConsumer>
              {apolloClient => (
                <PresearchCard>
                  <PresearchHeader>
                    <PresearchTitle>{capitalize(title)}</PresearchTitle>
                  </PresearchHeader>
                  <PresearchContent>
                    {this.renderPresearchFilter(apolloClient, site.siteView)}
                  </PresearchContent>
                </PresearchCard>
              )}
            </ApolloConsumer>
          )}
        </SiteProvider>
      );
    }
    return (
      <SiteProvider>
        {site => (
          <ApolloConsumer>
            {apolloClient => (
              <PanelWrapper>
                <Panel
                  onToggle={this.handleToggle}
                  expanded={isOpen}
                  className="bm-panel-default">
                  <Panel.Heading className="bm-panel-heading">
                    <Panel.Title className="bm-panel-title" toggle>
                      <div className="flex">
                        <span>{title}</span>
                        <span>
                          <FontAwesome name={icon} />{' '}
                        </span>
                      </div>
                    </Panel.Title>
                  </Panel.Heading>
                  {isOpen && (
                    <Panel.Collapse className="bm-panel-collapse">
                      <Panel.Body>{this.renderFilter()}</Panel.Body>
                      <Panel.Body>
                        {this.renderBucketsPanel(apolloClient, site.siteView)}
                      </Panel.Body>
                    </Panel.Collapse>
                  )}
                </Panel>
              </PanelWrapper>
            )}
          </ApolloConsumer>
        )}
      </SiteProvider>
    );
  }
}

export default AggDropDown;
