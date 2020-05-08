import * as React from 'react';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import SearchPage from 'containers/SearchPage';
import { match } from 'react-router-dom';
import { History, Location } from 'history';
import {
  StyledProfileLabel,
  StyledProfileScoreLabel,
  StyledLabelValuePair,
  StyledProfileValue,
  StyledProfileScoreValue,
  ScoreBoard,
  StyledProfileRanking,
} from 'components/StyledComponents';

interface ProfileScoreBoardProps {
  totalPoints: any;
  totalContributions: any;
  totalReviews: any;
  totalTags: any;
  totalFavorites: any;
  handleDisplayChange?: any;
}

class ProfileScoreBoard extends React.Component<ProfileScoreBoardProps> {
  starLogo = totalContributions => {
    if (10 > totalContributions && totalContributions > 0) {
      return (
        <span style={{ display: 'flex', margin: 'auto' }}>
          <ReactStars
            count={1}
            color1={'#A97142'}
            color2={'#A97142'}
            half={false}
            size={25}
            // value={}
            //onChange={value => this.handleRatingChange(key, value)}
          />
        </span>
      );
      // return <img style={{ maxWidth: '1.25em' }} src="/star_outline.png" />;
    } else if (50 > totalContributions && totalContributions > 10) {
      // return <img style={{ maxWidth: '1.25em' }} src="/silver_star.png" />;
      return (
        <span>
          <ReactStars
            count={1}
            color1={'#C0C0C0'}
            color2={'#C0C0C0'}
            half={false}
            size={25}
            // value={}
            //onChange={value => this.handleRatingChange(key, value)}
          />
        </span>
      );
    } else if (100 > totalContributions && totalContributions > 50) {
      return (
        <span>
          <ReactStars
            count={1}
            color1={'#D4AF37'}
            color2={'#D4AF37'}
            half={false}
            size={25}
            // value={}
            //onChange={value => this.handleRatingChange(key, value)}
          />
        </span>
      );
    } else if (totalContributions > 100) {
      return (
        <span>
        <ReactStars
          count={1}
          color1={'#E5E4E2'}
          color2={'#E5E4E2'}
          half={false}
          size={25}
          // value={}
          //onChange={value => this.handleRatingChange(key, value)}
        />
      </span>
      );
    }
  };

  render() {
    return (
      <div>
        <ScoreBoard>
          <StyledLabelValuePair>
            <StyledProfileRanking>
              {this.starLogo(this.props.totalContributions)}
            </StyledProfileRanking>
            <StyledProfileScoreLabel>Star Level</StyledProfileScoreLabel>
          </StyledLabelValuePair>
        </ScoreBoard>
        <ScoreBoard>
          <StyledLabelValuePair
            onClick={() => this.props.handleDisplayChange('contributions')}>
            <StyledProfileScoreValue>
              {this.props.totalContributions}
            </StyledProfileScoreValue>
            <StyledProfileScoreLabel>Contributions</StyledProfileScoreLabel>
          </StyledLabelValuePair>
          <StyledLabelValuePair
            onClick={() => this.props.handleDisplayChange('reviews')}>
            <StyledProfileScoreValue>
              {this.props.totalReviews}
            </StyledProfileScoreValue>
            <StyledProfileScoreLabel>Reviews</StyledProfileScoreLabel>
          </StyledLabelValuePair>
          <StyledLabelValuePair>
            <StyledProfileScoreValue>
              {this.props.totalTags}
            </StyledProfileScoreValue>
            <StyledProfileScoreLabel>Tags</StyledProfileScoreLabel>
          </StyledLabelValuePair>
        </ScoreBoard>
      </div>
    );
  }
}

export default ProfileScoreBoard;
