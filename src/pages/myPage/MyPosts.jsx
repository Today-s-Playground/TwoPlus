import { useContext } from 'react';
import { UserContext } from '../../api/UserProvider';
import useFetch from '../../hooks/useFetch';
import { fetchReviewInfo } from '../../redux/slices/reviewInfoSlice';
import { fetchStrategyInfo } from './../../redux/slices/strategyInfoSlice';
import { fetchQuestionInfo } from './../../redux/slices/questionInfoSlice';
import '../../styles/MyPageCss.css';

const MyPosts = () => {
  const { user } = useContext(UserContext);
  const reviewData = useFetch('reviewInfo', fetchReviewInfo);
  const strategyData = useFetch('strategyInfo', fetchStrategyInfo);
  const questionData = useFetch('questionInfo', fetchQuestionInfo);

  let myPosts = [];

  if (user) {
    const myReview = reviewData.filter((data) => data.user_id === user.id);
    const myStrategy = strategyData.filter((data) => data.user_id === user.id);
    const myQuestion = questionData.filter((data) => data.user_id === user.id);
    myPosts = [...myReview, ...myStrategy, ...myQuestion];
  }
  console.log(myPosts);

  return (
    <div className="mypost-container">
      <h2 className="my-user-name">
        {user ? user.user_metadata.username : ''} 님이 👾 Today's PlayGround 🎮 에서 신나게 쓰신 글
      </h2>
      <ul className="ul-container">
        {myPosts.map(({ game_name, star_score, content, user_name }, index) => (
          <li key={index} className="my-user-post1">
            <div className="my-user-post2">
              <span> {game_name}</span>
              <span> ㅡ </span>
              {star_score ? (
                <span>
                  {user_name} 님이 주신 별점 ⭐️ : {star_score}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="my-user-content">{content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
