import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameApi from '../../api/GameApi/GameApi';
import styled from 'styled-components';
import './GameDetail.css';

const DetailFrame = styled.main`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  flex-direction: column;
`;

const DetailCardsFrame = styled.main`
  display: flex;
  justify-content: space-between;
`;

const GameImgFrame = styled.div`
  width: 580px;
  height: 580px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ceacf6;
  border-radius: 20px;
`;

const GameInfoFrame = styled.div`
  width: 580px;
  height: 580px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ceacf6;
  border-radius: 20px;
`;

const GamePriceFrame = styled.div`
  width: 1200px;
  height: 200px;
  margin-top: 50px;
  border: 1px solid #ceacf6;
  border-radius: 20px;
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  margin-top: 20px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  background-color: #ceacf6;
  border: none;
  border-radius: 10px;
`;

const GameDetail = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const resp = await GameApi.getGameById(id);
        setGameDetails(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchScreenshots = async () => {
      try {
        const resp = await GameApi.getGameScreenshots(id);
        setScreenshots(resp.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGameDetails();
    fetchScreenshots();
  }, [id]);

  if (!gameDetails) {
    return <div>Loading...</div>;
  }

  const genresString = gameDetails.genres ? gameDetails.genres.map((genre) => genre.name).join(', ') : '';

  return (
    <DetailFrame>
      <DetailCardsFrame>
        <GameImgFrame>
          {screenshots.length > 0 && <img className="imgMain" src={screenshots[0].image} alt="Large Game Screenshot" />}
          <div className="etcImg-frame">
            {screenshots.slice(1).map((screenshot) => (
              <img className="imgEtc" key={screenshot.id} src={screenshot.image} alt="Game Screenshot" />
            ))}
          </div>
        </GameImgFrame>
        <GameInfoFrame>
          <img className="deatil-gameImg" src={gameDetails.background_image} alt={gameDetails.name} />
          <div className="details">
            <h1 className="detail-gameTitle">{gameDetails.name}</h1>
            <p className="description">{gameDetails.description_raw}</p>
            <div className="detail-genres">
              <p className="genreTitle">장르 : </p>
              <p> {genresString}</p>
            </div>
            <div className="detail-released">
              <p className="releasedTitle">출시일 :</p>
              <p> {gameDetails.released}</p>
            </div>
            <div className="detail-rating">
              <p className="ratingTitle">평점 :</p>
              <p> {gameDetails.rating}</p>
            </div>
          </div>
        </GameInfoFrame>
      </DetailCardsFrame>
      <GamePriceFrame>
        <div className="detail-price">
          <p className="priceTitle">12000원</p>
          <div className="buttonFrame">
            <Button>장바구니에 담기</Button>
            <Button>구매하기</Button>
          </div>
        </div>
      </GamePriceFrame>
    </DetailFrame>
  );
};

export default GameDetail;
