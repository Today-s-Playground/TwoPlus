import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StHeader = styled.header`
  width: 100%;
  background-color: var(--main-color);
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  color: white;
  font-size: 20px;
  font-weight: bold;

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    a {
      margin: 0 60px;
    }
  }

  .login {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
  }

  a {
    margin: 0 5px;
  }
`;

const SearchContainer = styled.div`
  width: 200px;
  height: 30px;
  position: relative;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-right: 20px;

  img {
    position: absolute;
    right: 10px;
    top: 5px;
    width: 20px;
    height: 20px;
  }
`;

const Search = styled.input`
  border-radius: 50px;
  padding-left: 10px;
  background-color: white;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

const StFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: var(--main-color);
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <StHeader>
        <Link to="/">👾 Today’s Playground 🎮</Link>
        <div className="section">
          <Link to="/store">Store</Link>
          <Link to="/community">Community</Link>
          <Link to="/my">Mypage</Link>
        </div>
        <div className="login">
          <SearchContainer>
            <Search placeholder="검색" />
            <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" alt="searchIcon" />
          </SearchContainer>
          <Link>로그인</Link>
          <div>|</div>
          <Link>회원가입</Link>
        </div>
      </StHeader>
      {children}
      <StFooter>푸터 부분</StFooter>
    </>
  );
};

export default Layout;
