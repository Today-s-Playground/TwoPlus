import { StSection, StTitle, StH3, StLink } from './../../styles/CommunityMainStyles';
import ReviewFormat from './ReviewFormat';

const GameReview = () => {
  return (
    <StSection>
      <StTitle>
        <StH3>📋 게임 리뷰 게시판</StH3>
        <StLink to="/review">더보기</StLink>
      </StTitle>
      <ReviewFormat isSliced={true} $isMain={true} $show={false} />
    </StSection>
  );
};

export default GameReview;
