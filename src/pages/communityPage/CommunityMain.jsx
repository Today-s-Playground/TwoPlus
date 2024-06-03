import React from 'react';
import GameReview from '../../components/community/GameReview';
import GameStrategy from './../../components/community/GameStrategy';
import GameQuestion from '../../components/community/GameQuestion';

const CommunityMain = () => {
  return (
    <>
      <GameReview />
      <GameStrategy />
      <GameQuestion />
    </>
  );
};

export default CommunityMain;
