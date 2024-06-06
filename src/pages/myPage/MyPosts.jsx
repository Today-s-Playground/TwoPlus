import { useContext } from 'react';
import { UserContext } from '../../api/UserProvider';
import useFetch from '../../hooks/useFetch';
import { fetchReviewInfo } from '../../redux/slices/reviewInfoSlice';
import { fetchStrategyInfo } from './../../redux/slices/strategyInfoSlice';
import { fetchQuestionInfo } from './../../redux/slices/questionInfoSlice';

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

  return (
    <ul>
      {myPosts.map((post, index) => (
        <li key={index}>{post.content}</li>
      ))}
    </ul>
  );
};

export default MyPosts;
