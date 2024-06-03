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

const GameQuestion = () => {
  const navigate = useNavigate();

  return (
    <StSection>
      <StTitle>
        <StH3>게임 질문 게시판</StH3>
        <Link to="/question">더보기</Link>
      </StTitle>
      <StBoxSection>
        {questionData.slice(0, 3).map((obj) => (
          <StBox2 key={obj.id} onClick={() => navigate(`/question/${obj.id}`)}>
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

export default GameQuestion;
