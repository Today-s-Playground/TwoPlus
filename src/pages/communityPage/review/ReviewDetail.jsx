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
import { StButton, StCommentBox, StLi, StTextarea, StUl } from '../../../styles/ReviewDetailStyles';

// 임시 게임 리뷰 데이터
const data = [
  { id: 1, gameName: '오버워치', star: 3.5, username: '보라돌이', content: '재밌어요', commentAmount: 3 },
  { id: 2, gameName: '배틀그라운드', star: 4.0, username: '뚜비', content: '아주 재밌어요', commentAmount: 9 },
  { id: 3, gameName: '메이플스토리', star: 3.5, username: '나나', content: '정말 재밌어요', commentAmount: 0 },
  { id: 4, gameName: '또 뭐 있지', star: 3.5, username: '뽀', content: '아무거나', commentAmount: 8 }
];

// 리뷰 상세 페이지
const ReviewDetail = () => {
  const param = useParams();
  const filteredData = data.find((obj) => obj.id === parseInt(param.id));
  return (
    <StBox $detail={true}>
      {/* 상단 */}
      <StBoxTop>
        <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
        <StInfo>
          <p>{filteredData.gameName}</p>
          <p>⭐️{filteredData.star}</p>
          <p>{filteredData.username}</p>
        </StInfo>
        <StLikedBox $detail={true}>
          {/* <p>(좋아요 아이콘)</p> */}
          <StLiked src="../../../../src/images/liked.png" alt="" />
          <p>66</p>
        </StLikedBox>
      </StBoxTop>
      {/* 하단 */}
      <StContent $detail={true}>{filteredData.content}</StContent>
      <StLine>
        <p>{filteredData.commentAmount}</p>
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
