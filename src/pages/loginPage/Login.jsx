import React from 'react';
import '../../styles/LoginCss.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import supabase from '../../shared/supabaseClient';
import { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = async (e) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password
    });
    console.log('signin: ', { data, error });
  };

  const signOutUser = async (e) => {
    const { data, error } = await supabase.auth.signOut();
    console.log('signout: ', { data, error });
  };
  return (
    <div className="login-layout">
      <div className="login-contain">
        <span>로그인</span>
        <LoginInputGroup>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </LoginInputGroup>
        <LoginInputGroup>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </LoginInputGroup>
        <button className="login-button" onClick={signInUser}>
          로그인
        </button>
        {/* 구현 가능한 것까지 구현하기 */}
        <div>
          <Link to="/signup">회원가입</Link> | <span>아이디/비밀번호 찾기</span>
        </div>
        <div>소셜 계정으로 간편 로그인</div>
      </div>
    </div>
  );
};

export default Login;
