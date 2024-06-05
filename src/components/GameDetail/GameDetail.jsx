import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameApi from '../../api/GameApi/GameApi';

const GameDetail = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const resp = await GameApi.getGameById(id);
        setGameDetails(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (!gameDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{gameDetails.name}</h1>
      <img src={gameDetails.background_image} alt={gameDetails.name} />
      <p>{gameDetails.description_raw}</p>
    </div>
  );
};

export default GameDetail;
