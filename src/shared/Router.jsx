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

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StoreMain />} />
          <Route path="/community" element={<CommunityMain />} />
          <Route path="/review" element={<Review />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/question" element={<Question />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/my" element={<MyMain />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
