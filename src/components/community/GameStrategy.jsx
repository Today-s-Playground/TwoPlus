import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  StBox2,
  StBoxSection,
  StImg,
  StContent,
  StSection,
  StTitle,
  StBoxBottom,
  StComment,
  StH3
} from './../../styles/CommunityMainStyles';

// 임시 게임 공략 데이터
const strategyData = [
  {
    id: 1,
    gameName: '게임1',
    title: '제목1',
    content: '내용1',
    username: '유저1',
    commentAmount: 10
  },
  {
    id: 2,
    gameName: '게임2',
    title: '제목2',
    content: '내용2',
    username: '유저2',
    commentAmount: 20
  },
  {
    id: 3,
    gameName: '게임3',
    title: '제목3',
    content: '내용3',
    username: '유저3',
    commentAmount: 30
  },
  {
    id: 4,
    gameName: '게임4',
    title: '제목4',
    content: '내용4',
    username: '유저4',
    commentAmount: 40
  }
];

const GameStrategy = () => {
  const navigate = useNavigate();

  return (
    <StSection>
      <StTitle>
        <StH3>게임 공략 게시판</StH3>
        <Link to="/strategy">더보기</Link>
      </StTitle>
      <StBoxSection>
        {strategyData.slice(0, 3).map((obj) => (
          <StBox2 key={obj.id} onClick={() => navigate(`/strategy/${obj.id}`)}>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>{obj.gameName}</p>
            <p>{obj.title}</p>
            <StContent>{obj.content}</StContent>
            <StBoxBottom>
              <p>{obj.username}</p>
              <StComment>
                <p>{obj.commentAmount}</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
        ))}
      </StBoxSection>
    </StSection>
  );
};

export default GameStrategy;
