import { useDispatch } from 'react-redux';
import StrategyFormat from '../../../components/community/StrategyFormat';
import { addStrategyInfo } from '../../../redux/slices/strategyInfoSlice';
import { StH3 } from '../../../styles/CommunityMainStyles';
import { StInput, StSection, StReviewBox, StTextarea, StButton } from '../../../styles/ReviewStyles';
import { useContext } from 'react';
import { UserContext } from '../../../api/UserProvider';
import CommunityLayout from '../../../shared/CommunityLayout';

const Strategy = () => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();

  const onAddHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const gamename = data.get('gamename');
    const title = data.get('title');
    const content = data.get('content');
    const username = user.user_metadata.username;

    if (!gamename.trim()) return alert('게임 이름을 입력해주세요.');
    else if (!title.trim()) return alert('제목을 입력해주세요.');
    else if (!content.trim()) return alert('내용을 입력해주세요.');
    else {
      const newStrategyInfo = { gamename, title, username, content };
      dispatch(addStrategyInfo(newStrategyInfo));
      alert('게임 공략법이 등록되었습니다.');
    }

    e.target.reset();
  };

  return (
    <CommunityLayout>
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
          <label htmlFor="content">
            <br />
            <StTextarea id="content" name="content"></StTextarea>
          </label>
          <StButton type="submit">작성</StButton>
        </StReviewBox>
      </StSection>
      <StrategyFormat isSliced={false} path="strategy" $detail={true} $isMain={false} $show={true} />
    </CommunityLayout>
  );
};

export default Strategy;
