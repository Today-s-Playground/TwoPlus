import styled from 'styled-components';

const StHeader = styled.header`
  width: 100%;
  background-color: black;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: white;
  font-weight: 600;
`;

const StFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <StHeader>헤더 부분</StHeader>
      {children}
      <StFooter>푸터 부분</StFooter>
    </>
  );
};

export default Layout;
