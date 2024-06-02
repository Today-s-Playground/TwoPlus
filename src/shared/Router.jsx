import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './../components/pages/mainPage/Home';
import StoreMain from './../components/pages/storePage/StoreMain';
import CommunityMain from '../components/pages/communityPage/CommunityMain';
import MyMain from './../components/pages/myPage/MyMain';
import Review from './../components/pages/communityPage/Review';
import Strategy from './../components/pages/communityPage/Strategy';
import Question from './../components/pages/communityPage/Question';
import Recruit from './../components/pages/communityPage/Recruit';
import Chat from './../components/pages/communityPage/Chat';
import Layout from './Layout';
import ReviewDetail from '../components/pages/communityPage/ReviewDetail';
import StrategyDetail from './../components/pages/communityPage/StrategyDetail';
import QuestionDetail from './../components/pages/communityPage/QuestionDetail';
import RecruitDetail from './../components/pages/communityPage/RecruitDetail';
import ChatDetail from './../components/pages/communityPage/ChatDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 홈 페이지(메인 페이지) 경로 설정 */}
          <Route path="/" element={<Home />} />
          {/* 스토어 페이지 경로 설정 */}
          <Route path="/store" element={<StoreMain />} />
          {/* 커뮤니티 페이지 경로 설정 */}
          <Route path="/community" element={<CommunityMain />} />
          <Route path="/review" element={<Review />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/strategy/:id" element={<StrategyDetail />} />
          <Route path="/question" element={<Question />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/recruit/:id" element={<RecruitDetail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<ChatDetail />} />
          {/* 마이페이지 경로 설정 */}
          <Route path="/my" element={<MyMain />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
