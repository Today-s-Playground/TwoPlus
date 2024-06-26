import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import StoreMain from './../pages/storePage/StoreMain';
import CommunityMain from './../pages/communityPage/CommunityMain';
import Review from './../pages/communityPage/review/Review';
import ReviewDetail from './../pages/communityPage/review/ReviewDetail';
import Strategy from './../pages/communityPage/strategy/Strategy';
import StrategyDetail from './../pages/communityPage/strategy/StrategyDetail';
import Question from './../pages/communityPage/question/Question';
import QuestionDetail from './../pages/communityPage/question/QuestionDetail';
import MyMain from './../pages/myPage/MyMain';
import GameDetail from '../components/GameDetail/GameDetail';
import SignUp from '../pages/loginPage/SignUp';
import Login from '../pages/loginPage/Login';
import ScrollToTop from './ScrollToTop';
import UserProvider from '../api/UserProvider';
import MyPosts from '../pages/myPage/MyPosts';
import MyComments from '../pages/myPage/MyComments';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <UserProvider>
        <Layout>
          <Routes>
            {/* 홈 페이지(메인 페이지) 경로 설정 */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* 스토어 페이지 경로 설정 */}
            <Route path="/" element={<StoreMain />} />
            <Route path="/game/:id" element={<GameDetail />} />

            {/* 커뮤니티 페이지 경로 설정 */}
            <Route path="/community" element={<CommunityMain />} />
            <Route path="/review" element={<Review />} />
            <Route path="/review/:id" element={<ReviewDetail />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/strategy/:id" element={<StrategyDetail />} />
            <Route path="/question" element={<Question />} />
            <Route path="/question/:id" element={<QuestionDetail />} />

            {/* 마이페이지 경로 설정 */}
            <Route path="/my" element={<MyMain />} />
            <Route path="/myposts" element={<MyPosts />} />
            <Route path="/mycomments" element={<MyComments />} />
          </Routes>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
};

export default Router;
