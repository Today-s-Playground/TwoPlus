// 회원가입을 누르면 이 창으로 이동

import React from 'react';
import '../../styles/SignUpCss.css';
import styled from 'styled-components';

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

// 구조는 다시 생각해보기~!

const SignUp = () => {
  return (
    <div className="sign-up-layout">
      <div className="sign-up-contain">
        {/* 로고 가져오기, 로그인 글씨를 버튼으로 할지 그냥 링크 달지 */}
        <div className="switch-to-login">
          <span>회원가입</span>
          <span>이미 Today's Playground 의 회원이신가요? 로그인</span>
        </div>
        <SignUpInputGroup>
          <label htmlFor="email">이메일</label>
          <div>
            {' '}
            <input id="email" name="id" type="text" placeholder="이메일" />
            <button className="signup-button">이메일 인증번호 발송</button>
          </div>
        </SignUpInputGroup>
        <SignUpInputGroup>
          <label htmlFor="emailCheck">이메일 인증번호 </label>
          <div>
            {' '}
            <input id="emailCheck" name="id" type="text" placeholder="이메일 인증번호" />
            <button className="signup-button">이메일 인증번호 확인</button>
          </div>
        </SignUpInputGroup>
        <SignUpInputGroup>
          <label htmlFor="password">비밀번호</label>
          <input id="password" name="password" type="password" placeholder="비밀번호"></input>
          {/* 보안 관련 설정 수정하기 */}
          <span>비밀번호는 ... </span>
        </SignUpInputGroup>
        <SignUpInputGroup>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input id="passwordCheck" name="password" type="password" placeholder="비밀번호"></input>
          {/* 다를 경우에만 */}
          <span>비밀번호가 다릅니다. 다시 입력해주세요. </span>
        </SignUpInputGroup>
        <SignUpInputGroup>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" type="text" placeholder="닉네임" />
        </SignUpInputGroup>
        <br />
        <div>약관</div>
        <div className="terms-contain"> </div>
        <butto className="signup-button">회원가입하기</butto>
      </div>
    </div>
  );
};

export default SignUp;
