import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Colunm = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  margin-top: 50px;
  justify-items: center;
`;

const CardStyle = styled.div`
  width: 240px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid lightgray;
`;

const GamesImg = styled.img`
  width: 200px;
  height: 180px;
  margin-top: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  width: 80%;
  text-align: center;
  margin-top: 20px;
`;

const GenreContainer = styled.div`
  gap: 5px;
  display: flex;
  margin-top: 20px;
`;

const GenreItem = styled.span`
  font-size: 14px;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #ceacf6;
  border: 1px solid lightgray;
`;

const TrendingGames = ({ gameList }) => {
  const navigate = useNavigate();

  const handleCardClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  return (
    <Container>
      <Colunm className="flex">
        {gameList.map((item, index) => (
          <CardStyle key={index} onClick={() => handleCardClick(item.id)}>
            <GamesImg src={item.background_image} />
            <Title className="gameTitle">{item.name}</Title>
            <GenreContainer>
              {item.genres.slice(0, 2).map((genre, idx) => (
                <GenreItem key={idx}># {genre.name}</GenreItem>
              ))}
            </GenreContainer>
          </CardStyle>
        ))}
      </Colunm>
    </Container>
  );
};

export default TrendingGames;
