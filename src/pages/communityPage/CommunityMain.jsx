import GameReview from '../../components/community/GameReview';
import GameStrategy from '../../components/community/GameStrategy';
import GameQuestion from '../../components/community/GameQuestion';
import CommunityLayout from '../../shared/CommunityLayout';

const CommunityMain = () => {
  return (
    <CommunityLayout>
      <GameReview />
      <GameStrategy />
      <GameQuestion />
    </CommunityLayout>
  );
};

export default CommunityMain;
