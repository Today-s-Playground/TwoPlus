import { useDispatch } from 'react-redux';
import StrategyFormat from '../../../components/community/StrategyFormat';
import { addInfo } from '../../../redux/slices/strategyInfoSlice';
import { StH3 } from '../../../styles/CommunityMainStyles';
import { StInput, StSection, StReviewBox, StTextarea, StButton } from '../../../styles/ReviewStyles';

const Strategy = () => {
  const dispatch = useDispatch();

  const onAddHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const gamename = data.get('gamename');
    const title = data.get('title');
    const username = data.get('username');
    const content = data.get('content');

    if (!gamename.trim()) return alert('게임 이름을 입력해주세요.');
    else if (!title.trim()) return alert('제목을 입력해주세요.');
    else if (!username.trim()) return alert('유저 이름을 입력해주세요.');
    else if (!content.trim()) return alert('내용을 입력해주세요.');
    else {
      const newStrategyInfo = { gamename, title, username, content };
      dispatch(addInfo(newStrategyInfo));
      alert('게임 공략법이 등록되었습니다.');
    }

    e.target.reset();
  };

  return (
    <>
      <StSection>
        <StH3>게임 공략법 작성하기📝</StH3>
        <StReviewBox onSubmit={onAddHandler}>
          <label htmlFor="gamename">
            게임 이름&ensp;
            <StInput $width="300px" type="text" id="gamename" name="gamename" />
          </label>
          <label htmlFor="title">
            제목&ensp;
            <StInput $width="300px" type="text" id="title" name="title" />
          </label>
          <label htmlFor="username">
            유저 이름&ensp;
            <StInput $width="150px" type="text" id="username" name="username" />
          </label>
          <label htmlFor="content">
            <br />
            <StTextarea id="content" name="content"></StTextarea>
          </label>
          <StButton type="submit">작성</StButton>
        </StReviewBox>
      </StSection>
      <StrategyFormat isSliced={false} path="strategy" $detail={true} $isMain={false} />
    </>
  );
};

export default Strategy;
