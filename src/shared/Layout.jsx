import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StHeader = styled.header`
  width: 100%;
  background-color: var(--main-color);
  height: 50px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
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
      </StHeader>
      {children}
      <StFooter>푸터 부분</StFooter>
    </>
  );
};

export default Layout;
