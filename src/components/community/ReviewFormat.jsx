import { useNavigate } from 'react-router-dom';
import {
  StBox,
  StBoxTop,
  StImg,
  StInfo,
  StContent,
  StLiked,
  StLikedBox,
  StLine,
  StBoxSection,
  StCommentBox
} from './../../styles/CommunityMainStyles';
import { fetchInfo } from '../../redux/slices/reviewInfoSlice';
import './../../styles/Loading.css';
import useFetch from '../../hooks/useFetch';

const ReviewFormat = ({ isSliced, $isMain }) => {
  const navigate = useNavigate();
  const data = useFetch('reviewInfo', fetchInfo, isSliced);

  return (
    <StBoxSection $isMain={$isMain}>
      {data.length === 0 ? (
        <div className="loader"></div>
      ) : (
        data.map((info) => (
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
                <p>{info.liked_amount}</p>
              </StLikedBox>
            </StBoxTop>
            <StContent>{info.content}</StContent>
            <StLine>
              <div>
                <p>{info.created_at.split('T')[0]}</p>
              </div>
              <StCommentBox>
                <p>(댓글 개수)</p>
                <p>(댓글 아이콘)</p>
              </StCommentBox>
            </StLine>
          </StBox>
        ))
      )}
    </StBoxSection>
  );
};

export default ReviewFormat;
