import ReviewFormat from '../../../components/community/ReviewFormat';
import { StH3 } from '../../../styles/CommunityMainStyles';
import { StButton, StInput, StReviewBox, StSection, StTextarea } from '../../../styles/ReviewStyles';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/slices/reviewInfoSlice';

const Review = () => {
  const dispatch = useDispatch();

  const onAddHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const gamename = data.get('gamename');
    const starscore = +data.get('starscore');
    const username = data.get('username');
    const content = data.get('content');

    if (!gamename.trim()) return alert('게임 이름을 입력해주세요.');
    else if (!starscore) return alert('별점을 입력해주세요.');
    else if (starscore < 1 || starscore > 5) return alert('별점은 1점 이상 5점 이하의 숫자여야 합니다.');
    else if (!username.trim()) return alert('유저 이름을 입력해주세요.');
    else if (!content.trim()) return alert('내용을 입력해주세요.');
    else {
      const newReviewInfo = { gamename, starscore, username, content };
      dispatch(addInfo(newReviewInfo));
      alert('리뷰가 등록되었습니다.');
    }

    e.target.reset();
  };

  return (
    <>
      <StSection>
        <StH3>리뷰 작성하기📝</StH3>
        <StReviewBox onSubmit={onAddHandler}>
          <label htmlFor="gamename">
            게임 이름&ensp;
            <StInput $width="300px" type="text" id="gamename" name="gamename" />
          </label>
          <label htmlFor="starscore">
            별점&ensp;
            <StInput $width="100px" type="number" id="starscore" name="starscore" min="1" max="5" step="0.1" />
          </label>
          <label htmlFor="username">
            유저 이름&ensp;
            <StInput $width="150px" type="text" id="username" name="username" />
          </label>
          <label htmlFor="content">
            <br />
            <StTextarea id="content" name="content"></StTextarea>
          </label>
        </StReviewBox>
        <StButton type="submit">작성</StButton>
      </StSection>
      <ReviewFormat isSliced={false} $isMain={false} />
    </>
  );
};

export default Review;
