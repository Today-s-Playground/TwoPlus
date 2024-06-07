import { useContext } from 'react';
import { UserContext } from '../api/UserProvider';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useDetailHandler = (addComment) => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddHandler = (e) => {
    if (user) {
      e.preventDefault();

      const data = new FormData(e.target);
      const username = user.user_metadata.username;
      const comment = data.get('comment');

      if (!comment.trim()) return alert('내용을 입력해주세요.');
      else {
        const newReviewComment = { username, comment };
        dispatch(addComment(newReviewComment));
        alert('리뷰가 등록되었습니다.');
      }
    } else {
      alert('로그인 후 이용해주세요!');
      navigate('/login');
      return;
    }

    e.target.reset();
  };

  return { onAddHandler };
};

export default useDetailHandler;
