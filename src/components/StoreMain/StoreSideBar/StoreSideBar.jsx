import React, { useEffect, useState } from 'react';
import GameApi from '../../../api/GameApi/GameApi';
import './StoreSideBar.css';
import styled from 'styled-components';

const CategorieImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const CategorieListFrame = styled.div`
  top: 52%;
  left: 20px;
  z-index: 999;
  position: fixed;
  border-radius: 20px;
  background-color: white;
  transform: translateY(-50%);
`;

function StoreSideBar({ genereId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = async () => {
    try {
      const resp = await GameApi.getGenreList();
      if (resp.data && resp.data.results) {
        setGenreList(resp.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CategorieListFrame>
      <div className="categorieList-frame">
        <div
          className="AllCategorie"
          onClick={() => {
            setActiveIndex(-1);
            genereId(null, '전체');
            selectedGenresName('전체');
          }}
        >
          <h3 className={`${activeIndex === -1 ? 'font-bold' : ''}`}>전체</h3>
        </div>
        {genreList.map((item, index) => (
          <div
            key={index}
            className={`categorie-list ${activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : ''}`}
            onClick={() => {
              setActiveIndex(index);
              genereId(item.id, item.name);
              selectedGenresName(item.name);
            }}
          >
            <CategorieImg
              src={item.image_background}
              className={`categorie-img ${activeIndex === index ? 'scale-105' : ''}`}
            />
            <h3 className={`${activeIndex === index ? 'font-bold' : ''}`}>{item.name}</h3>
          </div>
        ))}
        <div className="arrow-up"></div>
      </div>
    </CategorieListFrame>
  );
}

export default StoreSideBar;
