import ReviewFormat from '../../../components/community/ReviewFormat';
import { StH3 } from '../../../styles/CommunityMainStyles';
import { StInput, StReviewBox, StSection, StTextarea } from '../../../styles/ReviewStyles';

const Review = () => {
  return (
    <>
      <StSection>
        <StH3>리뷰 작성하기📝</StH3>
        <StReviewBox>
          <label htmlFor="gamename">
            게임 이름&ensp;
            <StInput $width="300px" type="text" id="gamename" />
          </label>
          <label htmlFor="starscore">
            별점&ensp;
            <StInput $width="100px" type="number" id="starscore" min="1" max="5" step="0.1" />
          </label>
          <label htmlFor="username">
            유저 이름&ensp;
            <StInput $width="150px" type="text" id="username" />
          </label>
          <label htmlFor="content">
            <br />
            <StTextarea id="content"></StTextarea>
          </label>
          <button>작성</button>
        </StReviewBox>
      </StSection>
      <ReviewFormat isSliced={false} $review={true} />
    </>
  );
};

export default Review;
