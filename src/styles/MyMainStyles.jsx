import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 30px;
  width: 100%;
`;

export const ProfileSection = styled.div`
  border-radius: 0 0 50px 50px;
  background-color: #7c63fc;
  height: 800px;
  position: absolute;
  top: 100px;
  width: 100%;
  z-index: -1;
`;

export const UserInfor = styled.section`
  padding: 50px;
  margin: 50px;
  display: flex;
  justify-content: space-between;

  .userName {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .nickName {
    font-size: 50px;
    margin: 10px 0px 20px 0px;
  }
  .userInfor {
    font-size: 20px;
    margin-left: 10px;
  }

  .profileBox {
    position: relative;

    .profilePic {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #fcfc76;
    }

    .correctionBox {
      border-radius: 50%;
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: white;
      bottom: 0px;
      right: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .correction {
      width: 30px;
      height: 30px;
    }
  }
`;

export const EmailDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 45px;
  border-radius: 50px;
  text-align: center;
  border: none;
  outline: none;
  background-color: white;
  align-items: center;
`;

export const GameSection = styled.section`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  margin: 50px;
  padding: 50px;
  display: flex;
  gap: 250px;
  text-align: center;

  .gameInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .gamePic {
    img {
      height: 100%;
    }
  }

  .game {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .gameName {
    font-size: 18px;
    color: #666;
  }

  .gameTime {
    font-size: 40px;
    font-weight: 300;
    color: #999;
  }

  .comment {
    font-size: 20px;
    color: #333;
  }

  .expression {
    display: flex;
    gap: 50px;
    font-size: 2rem;
    align-items: flex-end;
  }
`;

export const InforSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .my-posts,
  .my-comments {
    cursor: pointer;
  }
`;

export const InforState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 300px;
  height: 150px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  margin: 10px;

  .title {
    font-size: 25px;
    margin-bottom: 25px;
  }
  .number {
    font-size: 50px;
    font-weight: bold;
  }
`;

export const ListSection = styled.section`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  margin: 50px;
  padding: 50px;
  text-align: center;

  .purchaseList {
    font-size: 30px;
    margin-bottom: 40px;
  }

  .purchaseImg {
    display: flex;
    justify-content: space-between;
    img {
      width: 180px;
      height: 180px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 15px;
    }
  }
`;
