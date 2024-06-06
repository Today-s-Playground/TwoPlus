import { GameSection, InforSection, ListSection, Main, ProfileSection } from '../../styles/MyMainStyles';
import InfoCard from './InfoCard';
import ListCard from './ListCard';
import UserInfo from './UserInfo';

const MyMain = () => {
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
        <InfoCard title={'찜한 게임 목록'} />
        <InfoCard title={'내가 쓴 글'} />
        <InfoCard title={'내가 쓴 댓글'} />
      </InforSection>
      {/* 구매 목록 */}
      <ListCard />
    </Main>
  );
};

export default MyMain;
