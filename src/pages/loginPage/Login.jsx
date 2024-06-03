import React from 'react';
import '../../styles/LoginCss.css';
import styled from 'styled-components';

const LoginInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 120px;
  gap: 1rem;
  flex-wrap: wrap;

  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    width: 30vw;
  }
`;

const Login = () => {
  return (
    <div className="login-layout">
      <div className="login-contain">
        <span>로그인</span>
        <LoginInputGroup>
          <input type="text" placeholder="이메일" />
        </LoginInputGroup>
        <LoginInputGroup>
          <input type="password" placeholder="비밀번호" />
        </LoginInputGroup>
        <button className="login-button">로그인</button>
        {/* 구현 가능한 것까지 구현하기 */}
        <div>
          <span>회원가입</span> | <span>아이디/비밀번호 찾기</span>
        </div>
        <div>소셜 계정으로 간편 로그인</div>
      </div>
    </div>
  );
};

export default Login;
