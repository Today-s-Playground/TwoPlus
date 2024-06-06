import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../shared/supabaseClient';

// Context 생성
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getId = async () => {
    const {
      data: {
        session: {
          user: { id }
        }
      },
      error
    } = await supabase.auth.getSession();
    console.log(id);
    return id;
  };

  const userDataUserName = async () => {
    const user_id = await getId();
    const { data: UsersData, error: UsersError } = await supabase
      .from('Users')
      .select('user_name')
      .eq('user_id', user_id)
      .single();

    if (UsersError) {
      throw UsersError;
    }
    return UsersData.user_name;
  };
  // const userName = await userDataUserName();

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
    const { user, data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    console.log('signin: ', { data, error });

    const userName = await userDataUserName();

    if (data) {
      alert(`${userName}님 Today's playground에 오신 걸 환영합니다!`);
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

    alert(`로그아웃되었습니다.`);
  };

  return <UserContext.Provider value={{ user, signInUser, signOutUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
