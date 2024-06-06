import { useDispatch } from 'react-redux';
import StrategyFormat from '../../../components/community/StrategyFormat';
import { StH3 } from '../../../styles/CommunityMainStyles';
import { StInput, StSection, StReviewBox, StTextarea, StButton } from '../../../styles/ReviewStyles';
import { addQuestionInfo } from '../../../redux/slices/questionInfoSlice';
import { useContext } from 'react';
import { UserContext } from '../../../api/UserProvider';
import CommunityLayout from '../../../shared/CommunityLayout';


const Question = () => {
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
      const newQuestionInfo = { gamename, title, username, content };
      dispatch(addQuestionInfo(newQuestionInfo));
      alert('질문이 등록되었습니다.');
    }

    e.target.reset();
  };

  return (
    <CommunityLayout>
      <StSection>
        <StH3>질문 작성하기📝</StH3>
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
      <StrategyFormat isSliced={false} path="question" $detail={true} $isMain={false} $show={true} />
    </CommunityLayout>
  );
};

export default Question;
