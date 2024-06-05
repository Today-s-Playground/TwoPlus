import GameReview from '../../components/community/GameReview';
import GameStrategy from '../../components/community/GameStrategy';
import GameQuestion from '../../components/community/GameQuestion';
import CommunitySideBar from '../../shared/CommunityLayout';

const CommunityMain = () => {
  return (
    <CommunitySideBar>
      <GameReview />
      <GameStrategy />
      <GameQuestion />
    </CommunitySideBar>
  );
};

export default CommunityMain;
