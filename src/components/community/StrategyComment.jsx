import { useContext, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import {
  deleteStrategyComment,
  fetchStrategyComment,
  updateStrategyComment
} from '../../redux/slices/strategyCommentSlice';
import Loading from '../../shared/Loading';
import {
  StButton2,
  StButtonBox,
  StDate,
  StLi,
  StLiTop,
  StProfileBox,
  StTextarea2,
  StUl,
  StUsername
} from '../../styles/ReviewDetailStyles';
import { UserContext } from '../../api/UserProvider';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const StrategyComment = () => {
  const data = useFetch('strategyComment', fetchStrategyComment);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const textareaRefs = useRef([]);

  const onUpdateHandler = (e, id) => {
    e.stopPropagation();
    if (!user) {
      alert('로그인 후 이용해주세요!');
      navigate('/login');
      return;
    } else {
      let content = null;
      textareaRefs.current.forEach((ref) => {
        if (user.user_metadata.username === ref.name && ref.id == id) content = ref.value;
      });
      dispatch(updateStrategyComment({ id, content }));
      if (content) alert('수정이 완료되었습니다.');
      else alert('본인이 쓴 글만 수정할 수 있습니다.');
    }
  };

  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    if (!user) {
      alert('로그인 후 이용해주세요!');
      navigate('/login');
      return;
    } else {
      let isRightUser = false;
      textareaRefs.current.forEach((ref) => {
        if (user.user_metadata.username === ref.name && ref.id == id) {
          isRightUser = true;
        }
      });
      if (isRightUser === true) {
        const yes = confirm('정말 댓글을 삭제하시겠습니까?');
        if (yes) {
          dispatch(deleteStrategyComment({ id }));
          alert('삭제가 완료되었습니다.');
        }
      } else alert('본인이 쓴 글만 삭제할 수 있습니다.');
    }
  };

  return (
    <StUl>
      {data.length === 0 ? (
        <Loading />
      ) : (
        data.map((info, index) => (
          <StLi key={info.id}>
            <StLiTop>
              <StProfileBox>
                <StUsername>{info.user_name}</StUsername>
                <StDate>{info.created_at.split('T')[0]}</StDate>
              </StProfileBox>
              <StButtonBox>
                <StButton2 onClick={(e) => onUpdateHandler(e, info.id)}>수정</StButton2>
                <StButton2 onClick={(e) => onDeleteHandler(e, info.id)}>삭제</StButton2>
              </StButtonBox>
            </StLiTop>
            <StTextarea2
              id={info.id}
              name={info.user_name}
              defaultValue={info.comment}
              ref={(e) => (textareaRefs.current[index] = e)}
            ></StTextarea2>
          </StLi>
        ))
      )}
    </StUl>
  );
};

export default StrategyComment;
