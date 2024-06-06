import useFetch from '../../hooks/useFetch';
import { fetchStrategyComment } from '../../redux/slices/strategyCommentSlice';
import Loading from '../../shared/Loading';
import { StButton2, StButtonBox, StComment, StLi, StLiBottom, StLiTop, StUl } from '../../styles/ReviewDetailStyles';

const StrategyComment = () => {
  const data = useFetch('strategyComment', fetchStrategyComment);

  return (
    <StUl>
      {data.length === 0 ? (
        <Loading />
      ) : (
        data.map((info) => (
          <StLi key={info.id}>
            <StLiTop>
              <p>{info.user_name}</p>
              <p>{info.created_at.split('T')[0]}</p>
            </StLiTop>
            <StLiBottom>
              <StComment>{info.comment}</StComment>
              <StButtonBox>
                <StButton2>수정</StButton2>
                <StButton2>삭제</StButton2>
              </StButtonBox>
            </StLiBottom>
          </StLi>
        ))
      )}
    </StUl>
  );
};

export default StrategyComment;
