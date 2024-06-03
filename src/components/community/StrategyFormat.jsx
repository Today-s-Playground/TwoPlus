import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StBox2, StBoxSection, StImg, StContent, StBoxBottom, StComment } from './../../styles/CommunityMainStyles';

const StrategyFormat = ({ data, path }) => {
  const navigate = useNavigate();

  return (
    <StBoxSection>
      {data.map((obj) => (
        <StBox2 key={obj.id} onClick={() => navigate(`/${path}/${obj.id}`)}>
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
  );
};

export default StrategyFormat;
