import { useNavigate } from 'react-router-dom';
import { StBox2, StBoxSection, StImg, StContent, StBoxBottom, StComment } from './../../styles/CommunityMainStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInfo } from '../../redux/slices/strategyInfoSlice';
import './../../styles/Loading.css';

const StrategyFormat = ({ isSliced, path, $detail, $notMain }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { strategyInfo, status, error } = useSelector((state) => state.strategyInfo);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchInfo());
  }, [status, dispatch]);

  if (status === 'loading')
    return (
      <StBoxSection $notMain={$notMain}>
        <div className="loader"></div>
      </StBoxSection>
    );
  if (status === 'failed') console.log('에러: ', error);
  const data = isSliced ? strategyInfo.slice(0, 3) : strategyInfo;

  return (
    <StBoxSection $notMain={$notMain}>
      {data.map((info) => (
        <StBox2 key={info.id} onClick={() => navigate(`/${path}/${info.id}`)}>
          <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
          <p>{info.game_name}</p>
          <p>{info.title}</p>
          <StContent $detail={$detail}>{info.content}</StContent>
          <StBoxBottom>
            <p>{info.user_name}</p>
            <StComment>
              <p>{info.comment_amount}</p>
              <p>(댓글 아이콘)</p>
            </StComment>
          </StBoxBottom>
        </StBox2>
      ))}
    </StBoxSection>
  );
};

export default StrategyFormat;
