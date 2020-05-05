import * as React from 'react';
import styled from 'styled-components';
import SearchPage from 'containers/SearchPage';
import { match } from 'react-router-dom';
import { History, Location } from 'history';
import {
  ThemedMainContainer,
  SearchContainer,
  StyledProfileLabel,
  StyledProfileValue,
  StyledProfileForm,
} from 'components/StyledComponents';
import ProfileScoreBoard from '../ProfilePage/ProfileScoreBoard';
import RenderReviews from '../ProfilePage/RenderReviews';

interface ProfilePageProps {
  history: History;
  location: Location;
  match: any;
}
interface ProfilePageState{
  currentDisplay:string;
}
class ProfilePage extends React.Component<ProfilePageProps, ProfilePageState> {
  state:ProfilePageState={
    currentDisplay:'contributions'
  }
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
  handleDisplayChange = display => {
    this.setState({ currentDisplay: display });
  };
  renderResults=()=>{
    switch (this.state.currentDisplay) {

      case 'reviews':
        return (
          <RenderReviews
            reviewData={[]}
            history={this.props.history}
          />
        );
      case 'contributions':
        return(
          <SearchPage
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          email={this.props.match.params.id}
          profileParams={this.getUserParams(this.props.match.params.id)}
        />
        )
  }
}
  render() {
    return (
      <ThemedMainContainer>
      <h2 style={{marginLeft:"1em"}}>'s Contributions</h2>
      <SearchContainer>
        <ProfileScoreBoard
          totalPoints={0}
          totalContributions={0}
          totalReviews={0}
          totalTags={'Coming Soon'}
          totalFavorites={0}
          handleDisplayChange={this.handleDisplayChange}
        />
     </SearchContainer>
       {this.renderResults()}
        </ThemedMainContainer>
    );
  }
}

export default ProfilePage;
