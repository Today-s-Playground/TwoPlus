import { useParams } from 'react-router-dom';
import {
  StBox,
  StBoxTop,
  StContent,
  StImg,
  StInfo,
  StLiked,
  StLikedBox,
  StLine
} from '../../../styles/CommunityMainStyles';
import { StButton, StCommentBox, StForm, StLoadingBox, StTextarea } from '../../../styles/ReviewDetailStyles';
import { fetchReviewInfo } from '../../../redux/slices/reviewInfoSlice';
import './../../../styles/Loading.css';
import ReviewComment from '../../../components/community/ReviewComment';
import Loading from '../../../shared/Loading';
import CommunityLayout from '../../../shared/CommunityLayout';
import { addReviewComment } from '../../../redux/slices/reviewCommentSlice';
import useFetch from '../../../hooks/useFetch';
import useDetailHandler from '../../../hooks/useDetailHandler';

const ReviewDetail = () => {
  const { onAddHandler } = useDetailHandler(addReviewComment);
  const data = useFetch('reviewInfo', fetchReviewInfo);
  const param = useParams();
  const filteredData = data.find((info) => info.id === parseInt(param.id));

  return (
    <CommunityLayout>
      <StBox $detail={true}>
        {data.length === 0 ? (
          <StLoadingBox>
            <Loading />
          </StLoadingBox>
        ) : (
          <>
            <StBoxTop>
              <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
              <StInfo>
                <p>🎮{filteredData.game_name}</p>
                <p>⭐️{filteredData.star_score}</p>
                <p>{filteredData.user_name}</p>
              </StInfo>
              <StLikedBox $detail={true}>
                {/* <p>(좋아요 아이콘)</p> */}
                <StLiked src="../../../../src/images/liked.png" alt="" />
                <p>66</p>
              </StLikedBox>
            </StBoxTop>
            <StContent $detail={true}>{filteredData.content}</StContent>
            <StLine>
              <p>(댓글 개수)</p>
              <p>(댓글 아이콘)</p>
            </StLine>
            <StCommentBox>
              <StForm onSubmit={onAddHandler}>
                <StTextarea name="comment"></StTextarea>
                <StButton type="submit">작성</StButton>
              </StForm>
              <ReviewComment />
            </StCommentBox>
          </>
        )}
      </StBox>
    </CommunityLayout>
  );
};

export default ReviewDetail;
