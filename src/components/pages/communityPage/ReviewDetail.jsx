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

// 리뷰 상세 페이지
const ReviewDetail = () => {
  return (
    <StBox>
      {' '}
      {/* 이 div 태그 나중에 Link 태그로 바꾸고, to  속성에 경로 전달할 때 리뷰에 맞는 id를 같이 전달함 */}
      {/* 상단 */}
      <StBoxTop>
        <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
        <StInfo>
          <p>(게임 이름)</p>
          <p>(별점)</p>
          <p>(닉네임)</p>
        </StInfo>
        <StLikedBox>
          {/* <p>(좋아요 아이콘)</p> */}
          <StLiked src="../../../../src/images/liked.png" alt="" />
          <p>66</p>
        </StLikedBox>
      </StBoxTop>
      {/* 하단 */}
      <StContent>리뷰 내용(넘치면 ...으로 처리)</StContent>
      <StLine>
        <p>(댓글 개수)</p>
        <p>(댓글 아이콘)</p>
      </StLine>
    </StBox>
  );
};

export default ReviewDetail;
