import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../api/UserProvider';
import { Search, SearchContainer, StFooter, StHeader } from '../styles/LayoutStyles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchInput, setSearchResults } from '../redux/slices/searchSlice';
import { useSelector } from 'react-redux';
const Layout = ({ children }) => {
  const { user, signOutUser } = useContext(UserContext);
  // const [gameInput, setGameInput] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  //1. redux 전역 상태로 관리 (초기값 빈 배열)
  // 2.
  const dispatch = useDispatch();
  const { searchInput } = useSelector((state) => state.search);
  const getValue = (e) => {
    dispatch(setSearchInput(e.target.value.toLowerCase()));
  };
  // const getValue = (e) => {
  //   setGameInput(e.target.value.toLowerCase());
  // };
  console.log(searchInput);
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=cb6e513d181149ba97231f7307069426&search=${searchInput}`
      );
      // console.log(response.data.results);
      // setSearchResults(response.data.results);
      dispatch(setSearchResults(response.data.results));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  return (
    <>
      <StHeader>
        <Link to="/">👾 Today’s Playground 🎮</Link>
        <div className="section">
          <Link to="/">Store</Link>
          <Link to="/community">Community</Link>
          <Link to="/my">Mypage</Link>
        </div>
        <div className="login">
          <form onSubmit={handleSearchSubmit}>
            <SearchContainer>
              <Search placeholder="검색" value={searchInput} onChange={getValue} />
              <img
                src="https://www.freeiconspng.com/uploads/search-icon-png-21.png"
                alt="searchIcon"
                onClick={handleSearchSubmit}
              />
            </SearchContainer>
          </form>
          {user ? (
            <div className="logout-name" onClick={signOutUser}>
              로그아웃
            </div>
          ) : (
            <Link to="/login" className="login-name">
              로그인
            </Link>
          )}
          <div> |</div>
          {user ? (
            <span className="login-name">{user.user_metadata.username} 님</span>
          ) : (
            <Link to="/signup" className="signup-name">
              회원가입
            </Link>
          )}
        </div>
      </StHeader>
      {children}
      <StFooter>
        <div>팀스파르타주식회사 내일배움캠프</div>
        <div>
          <span>5늘만놀조(A05조) </span>
          <span> 김선민 김현진 최혜미 홍성빈</span>
        </div>
      </StFooter>
    </>
  );
};
export default Layout;
