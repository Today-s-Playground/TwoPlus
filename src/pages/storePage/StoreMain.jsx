import React, { useEffect, useState } from 'react';
import EventComp from '../../components/StoreMain/EventComp';

// const API_KEY = 'b003fb5d32a15ac6ef29f61cb8d3989d775ac4e8';
// const PROXY_URL = 'https://api.allorigins.win/get?url=';
// const API_URL = `${PROXY_URL}${encodeURIComponent(
//   `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&format=json&field_list=name,deck,image`
// )}`;

const StoreMain = () => {
  // const dispatch = useDispatch();
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const parsedData = JSON.parse(data.contents);
  //       dispatch(setGames(parsedData.results));
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [dispatch]);

  // // 첫 번째 이미지를 왼쪽 큰 이미지로, 두 번째와 세 번째 이미지를 오른쪽 작은 이미지로 사용
  // const largeImage = games[0]?.image?.small_url;
  // const smallImages = games.slice(1, 2).map((game) => game.image?.small_url);

  return (
    <div>
      <EventComp />
    </div>
  );
};

export default StoreMain;
