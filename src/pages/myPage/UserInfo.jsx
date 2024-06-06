import React, { useState, useEffect, useContext } from 'react';
import { EmailDiv, UserInfor } from '../../styles/MyMainStyles';
import supabase from '../../shared/supabaseClient';
import { UserContext } from '../../api/UserProvider';

function UserInfo({ userId }) {
  const defaultUserPic = 'https://ifh.cc/g/dgyJCA.png';
  const [userPic, setUserPic] = useState(defaultUserPic);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchImageUrl = async () => {
      if (!userId || !user) {
        setUserPic(defaultUserPic);
        return;
      }

      const { data, error } = await supabase.storage.from('avatars').getPublicUrl(`public/avatar_${userId}.png`);
      if (error) {
        console.error('Fetch Image Error:', error.message);
        setUserPic(defaultUserPic);
        return;
      }

      try {
        const response = await fetch(`${data.publicUrl}?t=${new Date().getTime()}`, { method: 'HEAD' });
        if (response.ok) {
          setUserPic(`${data.publicUrl}?t=${new Date().getTime()}`);
        } else {
          setUserPic(defaultUserPic);
        }
      } catch (error) {
        console.error('URL Test Error:', error.message);
        setUserPic(defaultUserPic);
      }
    };

    fetchImageUrl();
  }, [userId, user]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPic(reader.result);
      };
      reader.readAsDataURL(file);

      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(`public/avatar_${userId}.png`, file, { upsert: true });
      if (error) {
        console.error('Upload Error:', error.message);
      } else if (data) {
        const { publicUrl } = supabase.storage.from('avatars').getPublicUrl(data.path).data;
        setUserPic(`${publicUrl}?t=${new Date().getTime()}`);
      }
    }
  };

  return (
    <UserInfor>
      <div className="userBox">
        <div className="userName">
          <div className="nickName">{user ? user.user_metadata.username : <div></div>}</div>
          <p className="userInfor">🇰🇷 korea, Republic of</p>
        </div>
        <EmailDiv>{user ? user.user_metadata.email : <EmailDiv> </EmailDiv>}</EmailDiv>
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
