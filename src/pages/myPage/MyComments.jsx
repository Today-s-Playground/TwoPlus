import { UserContext } from './../../api/UserProvider';
import useFetch from '../../hooks/useFetch';
import { fetchReviewComment } from '../../redux/slices/reviewCommentSlice';
import { fetchStrategyComment } from './../../redux/slices/strategyCommentSlice';
import { fetchQuestionComment } from '../../redux/slices/questionCommentSlice';
import { useContext } from 'react';
import '../../styles/MyPageCss.css';
import moment from 'moment';

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
  console.log(myComments);

  const formatDate = (dateSt) => {
    const date = moment(dateSt);
    if (date.isValid()) {
      return date.format('YYYY-MM-DD HH:mm');
    }
  };

  return (
    <div className="mycomment-container">
      <h2 className="my-user-name">
        {user ? user.user_metadata.username : ''} 님이 👾 Today's PlayGround 🎮 에서 예쁘게 쓰신 댓글
      </h2>
      <ul className="ul-comment-container">
        {myComments.map(({ created_at, comment }, index) => (
          <li key={index} className="my-user-comment1">
            <span>{formatDate(created_at)}</span>
            <span>{comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComments;
