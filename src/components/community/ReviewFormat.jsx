import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StBox,
  StBoxSection,
  StBoxTop,
  StImg,
  StInfo,
  StContent,
  StLiked,
  StLikedBox,
  StLine
} from './../../styles/CommunityMainStyles';

const ReviewFormat = ({ data }) => {
  const navigate = useNavigate();

  return (
    <StBoxSection>
      {data.map((obj) => (
        <StBox key={obj.id} onClick={() => navigate(`/review/${obj.id}`)}>
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
          <StContent>{obj.content}</StContent>
          <StLine>
            <p>{obj.commentAmount}</p>
            <p>(댓글 아이콘)</p>
          </StLine>
        </StBox>
      ))}
    </StBoxSection>
  );
};

export default ReviewFormat;
