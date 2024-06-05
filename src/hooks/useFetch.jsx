import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useFetch = (info, fetchInfo, isSliced = false) => {
  const dispatch = useDispatch();
  const targetData = useSelector((state) => state[info]);

  const targetInfo = targetData[info];
  const status = targetData.status;

  useEffect(() => {
    if (status === 'idle') dispatch(fetchInfo());
  }, [status, dispatch]);

  const data =
    info === 'reviewInfo'
      ? isSliced
        ? targetInfo.slice(0, 2)
        : targetInfo
      : isSliced
      ? targetInfo.slice(0, 3)
      : targetInfo;

  return data;
};

export default useFetch;
