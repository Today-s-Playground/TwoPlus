import { useNavigate } from 'react-router-dom';
import { StBox2, StBoxSection, StImg, StContent, StBoxBottom, StComment } from './../../styles/CommunityMainStyles';
import './../../styles/Loading.css';
import useFetch from '../../hooks/useFetch';
import { fetchStrategyInfo } from './../../redux/slices/strategyInfoSlice';
import { fetchQuestionInfo } from './../../redux/slices/questionInfoSlice';

const StrategyFormat = ({ isSliced, path, $detail, $isMain }) => {
  const navigate = useNavigate();

  const data = useFetch(
    path === 'strategy' ? 'strategyInfo' : 'questionInfo',
    path === 'strategy' ? fetchStrategyInfo : fetchQuestionInfo,
    isSliced
  );

  return (
    <StBoxSection $isMain={$isMain}>
      {data.length === 0 ? (
        <div className="loader"></div>
      ) : (
        data.map((info) => (
          <StBox2 key={info.id} onClick={() => navigate(`/${path}/${info.id}`)}>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>{info.game_name}</p>
            <p>{info.title}</p>
            <p>{info.user_name}</p>
            <StContent $detail={$detail}>{info.content}</StContent>
            <StBoxBottom>
              <p>{info.created_at.split('T')[0]}</p>
              <StComment>
                <p>{info.comment_amount}</p>
                <p>(댓글 아이콘)</p>
              </StComment>
            </StBoxBottom>
          </StBox2>
        ))
      )}
    </StBoxSection>
  );
};

export default StrategyFormat;
