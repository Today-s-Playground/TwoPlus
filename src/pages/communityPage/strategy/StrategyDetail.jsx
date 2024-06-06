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
import { StButton, StCommentBox, StForm, StLoadingBox, StTextarea } from '../../../styles/ReviewDetailStyles';
import './../../../styles/Loading.css';
import Loading from '../../../shared/Loading';
import CommunityLayout from '../../../shared/CommunityLayout';
import useDetailHandler from '../../../hooks/useDetailHandler';
import { addStrategyComment } from '../../../redux/slices/strategyCommentSlice';
import useFetch from '../../../hooks/useFetch';
import StrategyComment from '../../../components/community/StrategyComment';

const StrategyDetail = () => {
  const { onAddHandler } = useDetailHandler(addStrategyComment);
  const data = useFetch('strategyInfo', fetchStrategyInfo);
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
                <p>{filteredData.title}</p>
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
              <StrategyComment />
            </StCommentBox>
          </>
        )}
      </StBox>
    </CommunityLayout>
  );
};

export default StrategyDetail;
