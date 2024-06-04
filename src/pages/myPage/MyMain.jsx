import {
  EmailInput,
  GameSection,
  InforSection,
  InforState,
  ListSection,
  Main,
  ProfileSection,
  UserInfo
} from '../../styles/MyMainStyles';
import InfoCard from './InfoCard';

const MyMain = () => {
  return (
    <Main>
      <ProfileSection />
      <UserInfo>
        <div className="userBox">
          <div className="userName">
            <div className="nickName">닉네임</div>
            <p className="userInfor">실명, 🇰🇷 korea, Republic of</p>
          </div>
          <EmailInput placeholder="이메일을 입력하세요 >" />
        </div>
        <div className="profileBox">
          <img src="https://ifh.cc/g/dgyJCA.png" alt="이미지" className="profilePic" />
          <div className="correctionBox">
            <img src="https://ifh.cc/g/4P9vHm.png" alt="수정이미지" className="correction" />
          </div>
        </div>
      </UserInfo>
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
      <ListSection>
        <div className="purchaseList">구매목록 ➡️</div>
        <img src="https://ifh.cc/g/kNDdqB.jpg" alt="" />
      </ListSection>
    </Main>
  );
};

export default MyMain;
