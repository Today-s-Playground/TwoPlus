import React, { useState } from 'react';
import { EmailInput, UserInfor } from '../../styles/MyMainStyles';
import supabase from '../../shared/supabaseClient';

function UserInfo() {
  const [userPic, setUserPic] = useState('https://ifh.cc/g/dgyJCA.png');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPic(reader.result);
      };
      reader.readAsDataURL(file);
    }
    const { data, error } = await supabase.storage.from('avatars').upload('public/avatar1.png', file);
  };

  const { data } = supabase.storage
    .from('avatars')
    .getPublicUrl('https://yusuzhzcwxhzjfwyukvj.supabase.co/storage/v1/object/public/avatars/1717575658168.png');

  return (
    <UserInfor>
      <div className="userBox">
        <div className="userName">
          <div className="nickName">닉네임</div>
          <p className="userInfor">실명, 🇰🇷 korea, Republic of</p>
        </div>
        <EmailInput placeholder="이메일을 입력하세요 >" />
      </div>
      <div className="profileBox">
        <img src={userPic} alt="이미지" className="profilePic" />
        <label className="correctionBox" htmlFor="profile">
          <img src="https://ifh.cc/g/4P9vHm.png" alt="수정이미지" className="correction" />
        </label>
        <input id="profile" style={{ display: 'none' }} type="file" accept="image/*" onChange={handleFileChange} />
      </div>
    </UserInfor>
  );
}

export default UserInfo;
