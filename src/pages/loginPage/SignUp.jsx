// 회원가입을 누르면 이 창으로 이동

import React from 'react';
import '../../styles/SignUpCss.css';
import styled from 'styled-components';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

const SignUpInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 120px;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.5rem;
  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
    text-align: left;
  }
  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    width: 30vw;
  }
  span {
    display: flex;
    align-items: center;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [username, setUserName] = useState('');
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  //로그인 상태 확인
  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  //이메일 회원가입
  const signUpNewUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username
        }
      }
    });
    console.log('signup: ', { data, error });
    if (data) {
      await alert(
        `${data.user.user_metadata.username}님 Today's Playground의 가입을 축하합니다! 이메일을 인증해주세요!`
      );
    }
    if (error) {
      return await (<h1>Error!</h1>);
    }
    navigate('/home');
  };

  // 깃헙 회원가입
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        data: {
          username
        }
      }
    });
    console.log('signup: ', { data, error });
    if (data) {
      return await alert(`${data.user.user_metadata.username}님 Today's Playground의 가입을 축하합니다!`);
    }
    if (error) {
      return await (<h1>Error!</h1>);
    }

    navigate('/home');
  };

  // 비밀번호 확인
  const isPWSame = (password, pwCheck) => {
    return password === pwCheck;
  };

  return (
    <div className="sign-up-layout">
      <div className="sign-up-contain">
        {/* 로고 가져오기 */}
        <div className="switch-to-login">
          <span>회원가입</span>
          <span>
            이미 Today's Playground 의 회원이신가요? <Link to="/login">로그인</Link>
          </span>
        </div>
        <SignUpInputGroup>
          <label htmlFor="email">이메일</label>
          <div>
            <input
              id="email"
              name="id"
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {/* <button className="signup-button">이메일 인증번호 발송</button> */}
          </div>
        </SignUpInputGroup>
        <SignUpInputGroup>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {/* 보안 관련 설정 수정하기 */}
          {/* 이거저거 섞는 법 알아보기 */}
        </SignUpInputGroup>
        <SignUpInputGroup>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input
            id="passwordCheck"
            name="password"
            type="password"
            placeholder="비밀번호 확인"
            value={pwCheck}
            onChange={(event) => setPwCheck(event.target.value)}
            required
          />
          {isPWSame(password, pwCheck) ? '' : <span className="password-isnt-same">비밀번호가 다릅니다.</span>}
        </SignUpInputGroup>
        <SignUpInputGroup>
          <label htmlFor="username">닉네임</label>
          <input
            id="username"
            type="text"
            placeholder="닉네임"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </SignUpInputGroup>
        <div className="social-account">소셜 계정으로 로그인하기</div>

        <div>
          <button onClick={signInWithGithub}>깃허브로 회원가입하기</button>
        </div>
        <br />
        <div>약관</div>
        <div className="terms-contain"> </div>
        <button className="signup-button" onClick={signUpNewUser}>
          회원가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
