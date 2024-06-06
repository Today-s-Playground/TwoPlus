import { useParams } from 'react-router-dom';
import { fetchStrategyInfo } from './../../../redux/slices/strategyInfoSlice';
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
import './../../../styles/Loading.css';
import Loading from '../../../shared/Loading';
import CommunityLayout from '../../../shared/CommunityLayout';
import useDetailHandler from '../../../hooks/useDetailHandler';
import { addStrategyComment, fetchStrategyComment } from '../../../redux/slices/strategyCommentSlice';
import useFetch from '../../../hooks/useFetch';
import StrategyComment from '../../../components/community/StrategyComment';

const StrategyDetail = () => {
  const { onAddHandler } = useDetailHandler(addStrategyComment);

  const data = useFetch('strategyInfo', fetchStrategyInfo);
  const commentData = useFetch('strategyComment', fetchStrategyComment);

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
                <p>{filteredData.title}</p>
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
              <StrategyComment />
            </StCommentBox>
          </>
        )}
      </StBox>
    </CommunityLayout>
  );
};

export default StrategyDetail;
