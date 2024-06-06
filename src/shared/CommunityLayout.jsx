import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CommunityLayout.css';

const CommunityLayout = ({ children }) => {
  return (
    <div className="community-layout-container">
      <div className="community-frame">
        <h2 className="community-game">게임 커뮤니티</h2>
        <div>
          <Link to="/review" className="community-list">
            게임 리뷰 게시판
          </Link>
        </div>
        <div>
          <Link to="/strategy" className="community-list">
            게임 공략 게시판
          </Link>
        </div>
        <div>
          <Link to="/question" className="community-list">
            게임 질문 게시판
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CommunityLayout;
