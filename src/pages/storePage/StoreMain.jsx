import React, { useEffect, useState } from 'react';
import GameApi from '../../api/GameApi/GameApi';
import Banner from '../../components/StoreMain/Banner';
import styled from 'styled-components';
import TrendingGames from '../../components/StoreMain/TrendingGames';
import CategorieComp from '../../components/StoreMain/CategorieComp';
import StoreSideBar from '../../components/StoreMain/StoreSideBar/StoreSideBar';
import { useSelector } from 'react-redux';

const StoreMainCont = styled.main`
  width: 1400px;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: space-around;
`;

const StoreMapFrame = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

const StoreMain = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');
  const [showTrending, setShowTrending] = useState(true);
  const [filteredGameList, setFilteredGameList] = useState([]);

  const searchResults = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    getAllGameList();
    getGameListByGenresId(4);
  }, []);

  useEffect(() => {
    setFilteredGameList(searchResults.length > 0 ? searchResults : allGameList);
  }, [searchResults, allGameList]);

  useEffect(() => {
    if (!showTrending) {
      setFilteredGameList(gameListByGenres);
    }
  }, [gameListByGenres]);

  const getAllGameList = async () => {
    try {
      const resp = await GameApi.getAllGames();
      console.log(resp.data);
      if (resp.data && resp.data.results) {
        setAllGameList(resp.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getGameListByGenresId = async (id) => {
    try {
      const resp = await GameApi.getGameListByGenreId(id);
      if (resp.data && resp.data.results) {
        setGameListByGenres(resp.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategorySelect = (genereId, name) => {
    setSelectedGenresName(name);
    if (genereId === null) {
      setShowTrending(true);
      setFilteredGameList(searchResults.length > 0 ? searchResults : allGameList);
    } else {
      getGameListByGenresId(genereId);
      setShowTrending(false);
    }
  };

  return (
    <StoreMainCont>
      <div className="store-sideBar">
        <StoreSideBar genereId={handleCategorySelect} selectedGenresName={setSelectedGenresName} />
      </div>
      <StoreMapFrame>
        {filteredGameList.length > 0 && <Banner gameBanner={filteredGameList[0]} />}
        {showTrending ? (
          <TrendingGames gameList={filteredGameList} />
        ) : (
          <CategorieComp gameList={filteredGameList} selectedGenresName={selectedGenresName} />
        )}
      </StoreMapFrame>
    </StoreMainCont>
  );
};

export default StoreMain;
