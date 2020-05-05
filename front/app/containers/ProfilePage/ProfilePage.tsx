import * as React from 'react';
import styled from 'styled-components';
import SearchPage from 'containers/SearchPage';
import { match } from 'react-router-dom';
import { History, Location } from 'history';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

interface ProfilePageProps {
  history: History;
  location: Location;
  match: any;
}

const USER_QUERY = gql`
  query User($userId: Int!) {
    user(userId: $userId) {
      firstName
      lastName
      reviewCount
      reviews {
        nctId,
        briefTitle,
        content
      }
      contributions
      pictureUrl
    }
  }
`;


class ProfilePage extends React.Component<ProfilePageProps> {
  componentDidMount() {
    console.log('This.props', this.props);
  }

  getUserParams = (userId: string) => {
    return {
      q: { key: 'AND', children: [] },
      aggFilters: [{ field: 'userId', values: [userId] }],
      crowdAggFilters: [],
      sorts: [],
      page: 0,
      pageSize: 25,
    };
  };

  render() {
    return (
      <Query query={USER_QUERY} variables={{userId: 1}}> 
        {({ loading, error, data }) => {
           if (loading) return <div>Fetching</div>
           if (error) return <div>Error</div>
          const userData = data
          console.log('USER data', userData)
        return (
          <div>
          <SearchPage
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          email={this.props.match.params.id}
          profileParams={this.getUserParams(this.props.match.params.id)}
        />
        </div>
        )
        }}
      </Query>
    );
  }
}

export default ProfilePage;
