import { StButton2, StButtonBox, StComment, StLi, StLiBottom, StLiTop, StUl } from '../../styles/ReviewDetailStyles';

const comments = ['저는 별로던데요;;', '맞아요 재밌더라구요ㅎ', '어떤 게 재밌는지 말해주셔야죠!'];

const ReviewComment = () => {
  return (
    <StUl>
      {comments.map((comment, index) => (
        <StLi key={index}>
          <StLiTop>
            <p>(닉네임)</p>
            <p>(작성 날짜, 시간)</p>
          </StLiTop>
          <StLiBottom>
            <StComment>{comment}</StComment>
            <StButtonBox>
              <StButton2>수정</StButton2>
              <StButton2>삭제</StButton2>
            </StButtonBox>
          </StLiBottom>
        </StLi>
      ))}
    </StUl>
  );
};

export default ReviewComment;
