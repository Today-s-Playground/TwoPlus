import { useNavigate } from 'react-router-dom';
import { StBox2, StBoxSection, StImg, StContent, StBoxBottom, StComment } from './../../styles/CommunityMainStyles';
import './../../styles/Loading.css';
import useFetch from '../../hooks/useFetch';
import { deleteStrategyInfo, fetchStrategyInfo, updateStrategyInfo } from './../../redux/slices/strategyInfoSlice';
import { deleteQuestionInfo, fetchQuestionInfo, updateQuestionInfo } from './../../redux/slices/questionInfoSlice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { StTextarea } from '../../styles/ReviewFormatStyles';
import { StButtonBox } from './../../styles/StrategyFormatStyles';
import useHandler from '../../hooks/useHandler';
import Loading from '../../shared/Loading';

const StrategyFormat = ({ isSliced, path, $detail, $isMain, $show }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textareaRefs = useRef([]);

  const data = useFetch(
    path === 'strategy' ? 'strategyInfo' : 'questionInfo',
    path === 'strategy' ? fetchStrategyInfo : fetchQuestionInfo,
    isSliced
  );
  const { onToggleHandler, onDeleteHandler } = useHandler(
    $show,
    path === 'strategy' ? deleteStrategyInfo : deleteQuestionInfo
  );

  const onUpdateHandler = (e, id) => {
    e.stopPropagation();
    let content = null;
    textareaRefs.current.forEach((ref) => {
      if (ref.id == id) content = ref.value;
    });
    dispatch(path === 'strategy' ? updateStrategyInfo({ id, content }) : updateQuestionInfo({ id, content }));
    alert('수정이 완료되었습니다.');
  };

  return (
    <StBoxSection $isMain={$isMain}>
      {data.length === 0 ? (
        <Loading />
      ) : (
        data.map((info, index) => (
          <StBox2 key={info.id} onClick={() => navigate(`/${path}/${info.id}`)}>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <p>🎮{info.game_name}</p>
            <p>{info.title}</p>
            <p>{info.user_name}</p>
            <StContent $detail={$detail} onClick={onToggleHandler}>
              <StTextarea
                id={info.id}
                defaultValue={info.content}
                ref={(e) => (textareaRefs.current[index] = e)}
                $show={$show}
              ></StTextarea>
            </StContent>
            <StButtonBox $show={$show}>
              <button
                onClick={(e) => {
                  onUpdateHandler(e, info.id);
                }}
              >
                수정
              </button>
              <button
                onClick={(e) => {
                  onDeleteHandler(e, info.id);
                }}
              >
                삭제
              </button>
            </StButtonBox>
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
