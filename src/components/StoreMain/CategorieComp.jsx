import React from 'react';
import styled from 'styled-components';

const CategorieCompImg = styled.img`
  width: 200px;
  height: 180px;
  margin-top: 20px;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Colunm = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  margin-top: 50px;
  justify-items: center;
`;

const Title = styled.h1`
  width: 80%;
  text-align: center;
  margin-top: 20px;
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

const CategorieComp = ({ gameList, selctedGenresName }) => {
  return (
    <Container>
      <h2>{selctedGenresName}</h2>
      <Colunm>
        {gameList.map((item, index) => (
          <CardStyle key={index}>
            <CategorieCompImg src={item.background_image} />
            <Title>{item.name}</Title>
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

export default CategorieComp;
