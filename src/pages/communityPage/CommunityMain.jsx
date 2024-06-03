import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  StBox,
  StBox2,
  StBoxSection,
  StBoxTop,
  StImg,
  StInfo,
  StContent,
  StSection,
  StTitle,
  StBoxBottom,
  StComment,
  StLiked,
  StLikedBox,
  StLine,
  StH3
} from './../../styles/CommunityMainStyles';

// 임시 게임 리뷰 데이터
const data = [
  { id: 1, gameName: '오버워치', star: 3.5, username: '보라돌이', content: '재밌어요', commentAmount: 3 },
  { id: 2, gameName: '배틀그라운드', star: 4.0, username: '뚜비', content: '아주 재밌어요', commentAmount: 9 },
  { id: 3, gameName: '메이플스토리', star: 3.5, username: '나나', content: '정말 재밌어요', commentAmount: 0 },
  { id: 4, gameName: '또 뭐 있지', star: 3.5, username: '뽀', content: '아무거나', commentAmount: 8 }
];

const CommunityMain = () => {
  // 게임 리뷰 게시판
  // TODO: 최신 리뷰글(또는 좋아요 수 많이 받은 리뷰) 상위 2개만 보여줌
  // TODO: "더보기" 버튼을 눌렀을 때, 게임 리뷰 게시판 페이지로 이동하도록 함
  // 게임 공략 게시판
  // TODO: 최신 공략글(또는 좋아요 수 많이 받은 공략) 상위 3개만 보여줌
  // TODO: "더보기" 버튼을 눌렀을 때, 게임 공략 게시판 페이지로 이동하도록 함
  // 게임 질문 게시판
  // TODO: 최신 질문글 상위 3개만 보여줌
  // TODO: "더보기" 버튼을 눌렀을 때, 게임 질문 게시판 페이지로 이동하도록 함

  // TODO: 세 개 게시판 디자인 통일할건지, 이대로 할건지 정하기
  const navigate = useNavigate();

  return (
    <>
      <StSection>
        <StTitle>
          <StH3>게임 리뷰 게시판</StH3>
          <Link to="/review">더보기</Link>
        </StTitle>
        <StBoxSection>
          {/* 게임 리뷰 게시판 박스 */}
          {data.slice(0, 2).map((obj) => (
            <StBox key={obj.id} onClick={() => navigate(`/review/${obj.id}`)}>
              {/* 상단 */}
              <StBoxTop>
                <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
                <StInfo>
                  <p>{obj.gameName}</p>
                  <p>⭐️{obj.star}</p>
                  <p>{obj.username}</p>
                </StInfo>
                <StLikedBox>
                  {/* <p>(좋아요 아이콘)</p> */}
                  <StLiked src="../../../../src/images/liked.png" alt="" />
                  <p>66</p>
                </StLikedBox>
              </StBoxTop>
              {/* 하단 */}
              <StContent>{obj.content}</StContent>
              <StLine>
                <p>{obj.commentAmount}</p>
                <p>(댓글 아이콘)</p>
              </StLine>
            </StBox>
          ))}
        </StBoxSection>
      </StSection>
      <StSection>
        <StTitle>
          <StH3>게임 공략 게시판</StH3>
          <Link to="/strategy">더보기</Link>
        </StTitle>
        <StBoxSection>
          {/* 게임 공략 게시판 박스 */}
          <StBox2>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>(게임 이름)</p>
            <p>(게시글 제목)</p>
            <StContent>공략 내용(넘치면 ...으로 처리)</StContent>
            <StBoxBottom>
              <p>(닉네임)</p>
              <StComment>
                <p>(댓글 개수)</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
          {/* 게임 공략 게시판 박스 */}
          <StBox2>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>(게임 이름)</p>
            <p>(게시글 제목)</p>
            <StContent>공략 내용(넘치면 ...으로 처리)</StContent>
            <StBoxBottom>
              <p>(닉네임)</p>
              <StComment>
                <p>(댓글 개수)</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
          {/* 게임 공략 게시판 박스 */}
          <StBox2>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>(게임 이름)</p>
            <p>(게시글 제목)</p>
            <StContent>공략 내용(넘치면 ...으로 처리)</StContent>
            <StBoxBottom>
              <p>(닉네임)</p>
              <StComment>
                <p>(댓글 개수)</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
        </StBoxSection>
      </StSection>
      <StSection>
        <StTitle>
          <StH3>게임 질문 게시판</StH3>
          <Link to="/question">더보기</Link>
        </StTitle>
        <StBoxSection>
          {/* 게임 질문 게시판 박스 */}
          <StBox2>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>(게임 이름)</p>
            <p>(게시글 제목)</p>
            <StContent>질문 내용(넘치면 ...으로 처리)</StContent>
            <StBoxBottom>
              <p>(닉네임)</p>
              <StComment>
                <p>(댓글 개수)</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
          {/* 게임 질문 게시판 박스 */}
          <StBox2>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>(게임 이름)</p>
            <p>(게시글 제목)</p>
            <StContent>질문 내용(넘치면 ...으로 처리)</StContent>
            <StBoxBottom>
              <p>(닉네임)</p>
              <StComment>
                <p>(댓글 개수)</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
          {/* 게임 질문 게시판 박스 */}
          <StBox2>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>(게임 이름)</p>
            <p>(게시글 제목)</p>
            <StContent>질문 내용(넘치면 ...으로 처리)</StContent>
            <StBoxBottom>
              <p>(닉네임)</p>
              <StComment>
                <p>(댓글 개수)</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
        </StBoxSection>
      </StSection>
    </>
  );
};

export default CommunityMain;
