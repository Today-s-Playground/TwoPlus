import { useContext, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import {
  deleteQuestionComment,
  fetchQuestionComment,
  updateQuestionComment
} from '../../redux/slices/questionCommentSlice';
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

const QuestionComment = () => {
  const data = useFetch('questionComment', fetchQuestionComment);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const textareaRefs = useRef([]);

  const onUpdateHandler = (e, id) => {
    e.stopPropagation();
    if (user) {
      let content = null;
      textareaRefs.current.forEach((ref) => {
        if (ref.id == id) content = ref.value;
      });
      dispatch(updateQuestionComment({ id, content }));
      alert('수정이 완료되었습니다.');
    } else {
      alert('로그인 후 이용해주세요!');
      navigate('/login');
      return;
    }
  };

  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    if (user) {
      const yes = confirm('정말 댓글을 삭제하시겠습니까?');
      if (yes) dispatch(deleteQuestionComment({ id }));
    } else {
      alert('로그인 후 이용해주세요!');
      navigate('/login');
      return;
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
              defaultValue={info.comment}
              ref={(e) => (textareaRefs.current[index] = e)}
            ></StTextarea2>
          </StLi>
        ))
      )}
    </StUl>
  );
};

export default QuestionComment;
