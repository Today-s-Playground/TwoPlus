import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStrategyInfo } from './../../../redux/slices/strategyInfoSlice';
import {
  StBox,
  StBoxSection,
  StBoxTop,
  StContent,
  StImg,
  StInfo,
  StLiked,
  StLikedBox,
  StLine
} from '../../../styles/CommunityMainStyles';
import { StButton, StCommentBox, StForm, StTextarea } from '../../../styles/ReviewDetailStyles';
import './../../../styles/Loading.css';
import ReviewComment from '../../../components/community/ReviewComment';
import CommunityLayout from '../../../shared/CommunityLayout';

// 게임 공략 상세 페이지
const StrategyDetail = () => {
  const dispatch = useDispatch();

  const param = useParams();

  const { strategyInfo, status, error } = useSelector((state) => state.strategyInfo);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchStrategyInfo());
  }, [status, dispatch]);

  if (status === 'loading')
    return (
      <StBoxSection>
        <div className="loader"></div>
      </StBoxSection>
    );
  if (status === 'failed') console.log('에러: ', error);

  const filteredData = strategyInfo.find((info) => info.id === parseInt(param.id));

  return (
    <CommunityLayout>
      <StBox $detail={true}>
        <StBoxTop>
          <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
          <StInfo>
            <p>{filteredData.game_name}</p>
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
          <StForm>
            <div>
              <label htmlFor="name">
                이름: <input type="text" id="name" name="username" />
              </label>
              <StTextarea name="comment"></StTextarea>
            </div>
            <StButton type="submit">작성</StButton>
          </StForm>
          <ReviewComment />
        </StCommentBox>
      </StBox>
    </CommunityLayout>
  );
};

export default StrategyDetail;
