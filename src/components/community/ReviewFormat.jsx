import { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../../redux/slices/reviewInfoSlice';
import './../../styles/Loading.css';

const ReviewFormat = ({ isSliced }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { reviewInfo, status, error } = useSelector((state) => state.reviewInfo);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchInfo());
  }, [status, dispatch]);

  if (status === 'loading')
    return (
      <StBoxSection>
        <div className="loader"></div>
      </StBoxSection>
    );
  if (status === 'failed') console.log('에러: ', error);
  const data = isSliced ? reviewInfo.slice(0, 2) : reviewInfo;

  return (
    <StBoxSection>
      {data.map((info) => (
        <StBox key={info.id} onClick={() => navigate(`/review/${info.id}`)}>
          <StBoxTop>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <StInfo>
              <p>{info.game_name}</p>
              <p>⭐️{info.star_score}</p>
              <p>{info.user_name}</p>
            </StInfo>
            <StLikedBox>
              {/* <p>(좋아요 아이콘)</p> */}
              <StLiked src="../../../../src/images/liked.png" alt="" />
              <p>66</p>
            </StLikedBox>
          </StBoxTop>
          <StContent>{info.content}</StContent>
          <StLine>
            <p>(댓글 개수)</p>
            <p>(댓글 아이콘)</p>
          </StLine>
        </StBox>
      ))}
    </StBoxSection>
  );
};

export default ReviewFormat;
