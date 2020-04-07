import * as React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import aggToField from 'utils/aggs/aggToField';
import { AggFilterListItem, SearchParams } from 'containers/SearchPage/Types';
import AggFilterInputUpdater from 'containers/SearchPage/components/AggFilterInputUpdater';
import { withSearchParams } from 'containers/SearchPage/components/SearchParamsContext';
import ValuesCrumb from './ValuesCrumb';
import ValueCrumb from './ValueCrumb';
import CrumbWrapper from './CrumbWrapper';

interface AggCrumbProps {
  grouping: string;
  agg: AggFilterListItem;
  searchParams: SearchParams | any;
  updateSearchParams: any;
}

interface AggCrumbState {}

class AggCrumb extends React.Component<AggCrumbProps, AggCrumbState> {
  render() {
    const { agg, grouping, searchParams, updateSearchParams } = this.props;
    const updater = new AggFilterInputUpdater(
      agg.field,
      searchParams,
      updateSearchParams,
      grouping
    );

    let crumb = <div></div>;
    if (agg.values && agg.values.length > 0) {
      crumb = (
        <ValuesCrumb
          values={agg.values}
          onClick={val => updater.removeFilter(val)}
        />
      );
    } else if (agg.lte || agg.gte) {
      let label = `${updater.getMinString()} — ${updater.getMaxString()}`;
      if (!agg.lte) {
        label = `≥ ${updater.getMinString()}`;
      }
      if (!agg.gte) {
        label = `≤ ${updater.getMaxString()}`;
      }
      crumb = (
        <ValueCrumb label={label} onClick={() => updater.removeRange()} />
      );
    }

    return (
      <ListGroupItem className="filter-values">
        <CrumbWrapper>
          <i>{aggToField(agg.field)}:</i>
          {crumb}
        </CrumbWrapper>
      </ListGroupItem>
    );
  }
}

export default withSearchParams(AggCrumb);