import React from 'react';
import { Link } from 'react-router-dom';
import { StSection, StTitle, StH3 } from './../../styles/CommunityMainStyles';
import ReviewFormat from './ReviewFormat';

// 임시 게임 리뷰 데이터
const reviewData = [
  { id: 1, gameName: '오버워치', star: 3.5, username: '보라돌이', content: '재밌어요', commentAmount: 3 },
  { id: 2, gameName: '배틀그라운드', star: 4.0, username: '뚜비', content: '아주 재밌어요', commentAmount: 9 },
  { id: 3, gameName: '메이플스토리', star: 3.5, username: '나나', content: '정말 재밌어요', commentAmount: 0 },
  { id: 4, gameName: '또 뭐 있지', star: 3.5, username: '뽀', content: '아무거나', commentAmount: 8 }
];

const slicedReviewData = reviewData.slice(0, 2);

const GameReview = () => {
  return (
    <StSection>
      <StTitle>
        <StH3>게임 리뷰 게시판</StH3>
        <Link to="/review">더보기</Link>
      </StTitle>
      <ReviewFormat data={slicedReviewData} />
    </StSection>
  );
};

export default GameReview;