import { useDispatch } from 'react-redux';

const useHandler = ($show, deleteInfo) => {
  const dispatch = useDispatch();

  const onToggleHandler = (e) => {
    if ($show) e.stopPropagation();
  };

  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    const yes = confirm('정말 댓글을 삭제하시겠습니까?');
    if (yes) dispatch(deleteInfo({ id }));
  };

  return { onToggleHandler, onDeleteHandler };
};

export default useHandler;
