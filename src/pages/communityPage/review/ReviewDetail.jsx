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
import {
  StButton,
  StCommentBox,
  StExplanation,
  StForm,
  StLoadingBox,
  StTextarea
} from '../../../styles/ReviewDetailStyles';
import { fetchReviewInfo } from '../../../redux/slices/reviewInfoSlice';
import './../../../styles/Loading.css';
import ReviewComment from '../../../components/community/ReviewComment';
import Loading from '../../../shared/Loading';
import CommunityLayout from '../../../shared/CommunityLayout';
import { addReviewComment, fetchReviewComment } from '../../../redux/slices/reviewCommentSlice';
import useFetch from '../../../hooks/useFetch';
import useDetailHandler from '../../../hooks/useDetailHandler';

const ReviewDetail = () => {
  const { onAddHandler } = useDetailHandler(addReviewComment);

  const data = useFetch('reviewInfo', fetchReviewInfo);
  const commentData = useFetch('reviewComment', fetchReviewComment);

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
              <StInfo $detail={true}>
                <p>🎮 {filteredData.game_name}</p>
                <p>⭐️ {filteredData.star_score}</p>
                <p>{filteredData.user_name}</p>
              </StInfo>
            </StBoxTop>
            <StContent $detail={true}>{filteredData.content}</StContent>
            <StLine>
              <StExplanation>총 💬{commentData.length}개의 댓글이 달려 있어요!</StExplanation>
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
