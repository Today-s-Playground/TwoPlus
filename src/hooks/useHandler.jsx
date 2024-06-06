import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { UserContext } from '../api/UserProvider';
import { useNavigate } from 'react-router-dom';

const useHandler = ($show, deleteInfo) => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onToggleHandler = (e) => {
    if ($show) e.stopPropagation();
  };

  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    if (user) {
      const yes = confirm('정말 댓글을 삭제하시겠습니까?');
      if (yes) dispatch(deleteInfo({ id }));
    } else {
      alert('로그인 후 이용해주세요!');
      navigate('/login');
      return;
    }
  };

  return { onToggleHandler, onDeleteHandler };
};

export default useHandler;
