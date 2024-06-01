import React from 'react';
import { Link } from 'react-router-dom';
import { StSection, StTitle } from '../../../styles/CommunityMainStyles';

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

  return (
    <>
      <StSection>
        <StTitle>
          <h3>게임 리뷰 게시판</h3>
          {/* <Link to="/review">더보기</Link> */}
          <p>더보기</p>
        </StTitle>
        {/* 게임 리뷰 게시판 박스 */}
        <div>
          {' '}
          {/* 이 div 태그 나중에 Link 태그로 바꾸고, to  속성에 경로 전달할 때 리뷰에 맞는 id를 같이 전달함 */}
          {/* 상단 */}
          <div>
            <img src="" alt="" /> {/* 게임 이미지 */}
            <div>
              <p>(게임 이름)</p>
              <p>(별점)</p>
              <p>(닉네임)</p>
            </div>
            <div>(좋아요 이모티콘과 좋아요 개수)</div>
          </div>
          {/* 하단 */}
          <div>리뷰 내용(넘치면 ...으로 처리)</div>
        </div>
        {/* 게임 리뷰 게시판 박스 */}
        <div>
          {' '}
          {/* 이 div 태그 나중에 Link 태그로 바꾸고, to  속성에 경로 전달할 때 리뷰에 맞는 id를 같이 전달함 */}
          {/* 상단 */}
          <div>
            <img src="" alt="" /> {/* 게임 이미지 */}
            <div>
              <p>(게임 이름)</p>
              <p>(별점)</p>
              <p>(닉네임)</p>
            </div>
          </div>
          {/* 하단 */}
          <div>리뷰 내용(넘치면 ...으로 처리)</div>
        </div>
      </StSection>
      <StSection>
        <StTitle>
          <h3>게임 공략 게시판</h3>
          {/* <Link to="/strategy">더보기</Link> */}
          <p>더보기</p>
        </StTitle>
        {/* 게임 공략 게시판 박스 */}
        <div>
          <img src="" alt="" /> {/* 게임 이미지 */}
          <p>(게임 이름)</p>
          <p>(게시글 제목)</p>
          <p>공략 내용(넘치면 ...으로 처리)</p>
          <div>
            <p>(닉네임)</p>
            <p>진행 중</p>
          </div>
        </div>
        {/* 게임 공략 게시판 박스 */}
        <div>
          <img src="" alt="" /> {/* 게임 이미지 */}
          <p>(게임 이름)</p>
          <p>(게시글 제목)</p>
          <p>공략 내용(넘치면 ...으로 처리)</p>
          <div>
            <p>(닉네임)</p>
            <p>진행 중</p>
          </div>
        </div>
        {/* 게임 공략 게시판 박스 */}
        <div>
          <img src="" alt="" /> {/* 게임 이미지 */}
          <p>(게임 이름)</p>
          <p>(게시글 제목)</p>
          <p>공략 내용(넘치면 ...으로 처리)</p>
          <div>
            <p>(닉네임)</p>
            <p>진행 중</p>
          </div>
        </div>
      </StSection>
      <StSection>
        <StTitle>
          <h3>게임 질문 게시판</h3>
          {/* <Link to="/question">더보기</Link> */}
          <p>더보기</p>
        </StTitle>
        <div>
          <div>게임 이름</div>
        </div>
      </StSection>
    </>
  );
};

export default CommunityMain;
