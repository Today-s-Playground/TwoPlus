import { Link } from 'react-router-dom';
import { StSection, StTitle, StH3 } from './../../styles/CommunityMainStyles';
import ReviewFormat from './ReviewFormat';

const GameReview = () => {
  return (
    <StSection>
      <StTitle>
        <StH3>게임 리뷰 게시판</StH3>
        <Link to="/review">더보기</Link>
      </StTitle>
      <ReviewFormat isSliced={true} />
    </StSection>
  );
};

export default GameReview;
