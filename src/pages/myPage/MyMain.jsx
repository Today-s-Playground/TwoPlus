import styled from 'styled-components';

const Main = styled.main`
  margin-top: 30px;
  width: 100%;
`;

const ProfileSection = styled.section`
  padding: 100px;
  border-radius: 0 0 50px 50px;
  background-color: #7c63fc;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.section`
  .userName {
    display: flex;
    align-items: center;
  }

  .nickName {
    font-size: 50px;
    margin: 0 15px 20px 0px;
  }
  .userInfor {
    font-size: 20px;
  }
`;

const EmailInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 50px;
  text-align: center;
  border: none;
  outline: none;
`;

const Profile = styled.section`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: yellow;
`;

const GameSection = styled.section`
  background-color: green;
  padding: 100px;
`;
const GameDetails = styled.div``;

const GameInfo = styled.div``;

const InforSection = styled.section``;

const ListSection = styled.section``;

const MyMain = () => {
  return (
    <Main>
      <ProfileSection>
        <UserInfo>
          <div className="userName">
            <div className="nickName">닉네임</div>
            <p className="userInfor">실명, 🇰🇷 korea, Republic of</p>
          </div>
          <EmailInput placeholder="이메일을 입력하세요 >" />
        </UserInfo>
        <Profile />
      </ProfileSection>
      {/* 가장 많이 플레이한 게임 */}
      <GameSection>
        <GameDetails>
          <GameInfo>
            <p>asdasd</p>
          </GameInfo>
        </GameDetails>
      </GameSection>
      {/* 나의 정보 */}
      <InforSection>
        <div>찜한 게임 목록</div>
        <div>내가 쓴 글</div>
        <div>친구 목록</div>
      </InforSection>
      {/* 구매 목록 */}
      <ListSection>
        <div>구매목록</div>
      </ListSection>
    </Main>
  );
};

export default MyMain;
