import { StSection, StTitle, StH3, StLink } from './../../styles/CommunityMainStyles';
import StrategyFormat from './StrategyFormat';

// 임시 게임 질문 데이터
const questionData = [
  {
    id: 1,
    gameName: '게임이름1',
    title: '게시글제목1',
    content: '질문내용1',
    username: '유저1',
    commentAmount: 10
  },
  {
    id: 2,
    gameName: '게임이름2',
    title: '게시글제목2',
    content: '질문내용2',
    username: '유저2',
    commentAmount: 20
  },
  {
    id: 3,
    gameName: '게임이름3',
    title: '게시글제목3',
    content: '질문내용3',
    username: '유저3',
    commentAmount: 30
  },
  {
    id: 4,
    gameName: '게임이름4',
    title: '게시글제목4',
    content: '질문내용4',
    username: '유저4',
    commentAmount: 40
  }
];

const slicedQuestionData = questionData.slice(0, 3);

const GameQuestion = () => {
  return (
    <StSection>
      <StTitle>
        <StH3>🙋‍♂️게임 질문 게시판🙋‍♀️</StH3>
        <StLink to="/question">더보기</StLink>
      </StTitle>
      <StrategyFormat data={slicedQuestionData} path="question" />
    </StSection>
  );
};

export default GameQuestion;
