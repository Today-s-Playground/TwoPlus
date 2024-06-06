import { useContext } from 'react';
import { GameSection, InforSection, ListSection, Main, ProfileSection } from '../../styles/MyMainStyles';
import InfoCard from './InfoCard';
import ListCard from './ListCard';
import UserInfo from './UserInfo';
import { UserContext } from './../../api/UserProvider';
import useFetch from '../../hooks/useFetch';
import { fetchReviewInfo } from '../../redux/slices/reviewInfoSlice';
import { fetchStrategyInfo } from './../../redux/slices/strategyInfoSlice';
import { fetchQuestionInfo } from './../../redux/slices/questionInfoSlice';
import { fetchReviewComment } from '../../redux/slices/reviewCommentSlice';
import { fetchStrategyComment } from './../../redux/slices/strategyCommentSlice';
import { fetchQuestionComment } from '../../redux/slices/questionCommentSlice';
import { useNavigate } from 'react-router-dom';
import MyPosts from './MyPosts';

const MyMain = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const reviewData = useFetch('reviewInfo', fetchReviewInfo);
  const strategyData = useFetch('strategyInfo', fetchStrategyInfo);
  const questionData = useFetch('questionInfo', fetchQuestionInfo);
  const reviewComment = useFetch('reviewComment', fetchReviewComment);
  const strategyComment = useFetch('strategyComment', fetchStrategyComment);
  const questionComment = useFetch('questionComment', fetchQuestionComment);

  let myPosts = [];
  let myComments = [];

  if (user) {
    const myReview = reviewData.filter((data) => data.user_id === user.id);
    const myStrategy = strategyData.filter((data) => data.user_id === user.id);
    const myQuestion = questionData.filter((data) => data.user_id === user.id);
    myPosts = [...myReview, ...myStrategy, ...myQuestion];
    const myReviewCmt = reviewComment.filter((data) => data.user_id === user.id);
    const myStrategyCmt = strategyComment.filter((data) => data.user_id === user.id);
    const myQuestionCmt = questionComment.filter((data) => data.user_id === user.id);
    myComments = [...myReviewCmt, ...myStrategyCmt, ...myQuestionCmt];
  }

  return (
    <Main>
      <ProfileSection />
      <UserInfo />
      {/* 가장 많이 플레이한 게임 */}
      <GameSection>
        <div className="gamePic">
          <img src="https://ifh.cc/g/mJwCpw.png" alt="game-pic" />
        </div>
        <div className="gameInfo">
          <div>
            <p className="game">가장 많이 플레이어 한 게임 😮</p>
            <p className="gameName">PUBG: BATTLEGROUNDS</p>
          </div>
          <p className="gameTime">789시간</p>
          <p className="comment">그만 좀 하세요</p>
        </div>
        <div className="expression">
          <div>👍🏻</div>
          <div>👎🏻</div>
          <div>💬</div>
        </div>
      </GameSection>
      {/* 나의 정보 */}
      <InforSection>
        <div>
          <InfoCard title={'찜한 게임 목록'} />
        </div>
        <div onClick={() => navigate('/myposts')}>
          <InfoCard title={'내가 쓴 글'} number={myPosts.length} />
        </div>
        <div onClick={() => navigate('/mycomments')}>
          <InfoCard title={'내가 쓴 댓글'} number={myComments.length} />
        </div>
      </InforSection>
      {/* 구매 목록 */}
      <ListCard />
    </Main>
  );
};

export default MyMain;
