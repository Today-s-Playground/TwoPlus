import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../shared/supabaseClient';

// Context 생성
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 로그인, 로그아웃 추적
  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 로그인
  const signInUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    console.log('signin: ', { data, error });
    if (data) {
      alert(`${data.user.user_metadata.username}님 Today's playground에 오신 걸 환영합니다!`);
      navigate('/');
    } else if (error) {
      alert(`로그인 실패하였습니다. ${error.message}`);
    }
  };

  // 로그아웃
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    console.log('signout: ', error);
    if (!error) {
      setUser(null);
      navigate('/');
    } else {
      alert(`로그아웃 실패하였습니다. ${error.message}`);
    }
  };

  return <UserContext.Provider value={{ user, signInUser, signOutUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
