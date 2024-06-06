import { StSection, StTitle, StH3, StLink } from './../../styles/CommunityMainStyles';
import StrategyFormat from './StrategyFormat';

const GameQuestion = () => {
  return (
    <StSection>
      <StTitle>
        <StH3>🙋‍♂️ 게임 질문 게시판 🙋‍♀️</StH3>
        <StLink to="/question">더보기</StLink>
      </StTitle>
      <StrategyFormat isSliced={true} $isMain={true} $show={false} path="question" />
    </StSection>
  );
};

export default GameQuestion;
