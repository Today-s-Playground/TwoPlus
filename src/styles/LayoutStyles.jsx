import styled from 'styled-components';

export const StHeader = styled.header`
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

export const SearchContainer = styled.div`
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

export const Search = styled.input`
  border-radius: 50px;
  padding-left: 20px;
  background-color: white;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

export const StFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: var(--main-color);
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-direction: column;
  gap: 1rem;
`;
