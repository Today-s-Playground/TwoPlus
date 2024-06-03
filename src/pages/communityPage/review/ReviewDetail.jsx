import { useParams } from 'react-router-dom';
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
import { StButton, StCommentBox, StLi, StTextarea, StUl } from '../../../styles/ReviewDetailStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInfo } from '../../../redux/slices/reviewInfoSlice';
import './../../../styles/Loading.css';

// 리뷰 상세 페이지
const ReviewDetail = () => {
  const param = useParams();

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

  const filteredData = reviewInfo.find((info) => info.id === parseInt(param.id));
  return (
    <StBox $detail={true}>
      <StBoxTop>
        <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
        <StInfo>
          <p>{filteredData.game_name}</p>
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
        <div>
          <StTextarea name="" id=""></StTextarea>
          <StButton>작성</StButton>
        </div>
        <StUl>
          <StLi>저는 별로던데요;;</StLi>
          <StLi>맞아요 재밌더라구요ㅎ</StLi>
          <StLi>어떤 게 재밌는지 말해주셔야죠!</StLi>
        </StUl>
      </StCommentBox>
    </StBox>
  );
};

export default ReviewDetail;
