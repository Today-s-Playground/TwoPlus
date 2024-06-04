import { StSection, StTitle, StH3, StLink } from './../../styles/CommunityMainStyles';
import StrategyFormat from './StrategyFormat';

const GameStrategy = () => {
  return (
    <StSection>
      <StTitle>
        <StH3>🏹게임 공략 게시판</StH3>
        <StLink to="/strategy">더보기</StLink>
      </StTitle>
      <StrategyFormat isSliced={true} path="strategy" />
    </StSection>
  );
};

export default GameStrategy;
