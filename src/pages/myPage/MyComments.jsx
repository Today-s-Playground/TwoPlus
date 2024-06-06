import { UserContext } from './../../api/UserProvider';
import useFetch from '../../hooks/useFetch';
import { fetchReviewComment } from '../../redux/slices/reviewCommentSlice';
import { fetchStrategyComment } from './../../redux/slices/strategyCommentSlice';
import { fetchQuestionComment } from '../../redux/slices/questionCommentSlice';
import { useContext } from 'react';

const MyComments = () => {
  const { user } = useContext(UserContext);
  const reviewComment = useFetch('reviewComment', fetchReviewComment);
  const strategyComment = useFetch('strategyComment', fetchStrategyComment);
  const questionComment = useFetch('questionComment', fetchQuestionComment);

  let myComments = [];

  if (user) {
    const myReviewCmt = reviewComment.filter((data) => data.user_id === user.id);
    const myStrategyCmt = strategyComment.filter((data) => data.user_id === user.id);
    const myQuestionCmt = questionComment.filter((data) => data.user_id === user.id);
    myComments = [...myReviewCmt, ...myStrategyCmt, ...myQuestionCmt];
  }
  return (
    <ul>
      {myComments.map((post, index) => (
        <li key={index}>{post.comment}</li>
      ))}
    </ul>
  );
};

export default MyComments;
