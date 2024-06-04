import React, { useEffect } from 'react';
import './EventComp.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/slices/storeMainSlice/gameSlice';

const EventComp = () => {
  const dispatch = useDispatch();
  const { games, loading, error } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="EventComp">
      <header className="event-title">할인 이벤트</header>
      <div className="event-frame">
        <div className="event-leftImg">
          <ul>
            {games.map((game) => (
              <li key={game.appid}>{game.name}</li>
            ))}
          </ul>
          <img
            className="event-img1"
            src="https://cdn.vcgamers.com/news/wp-content/uploads/2022/05/capsule_616x353-14.jpg"
            alt="eventImg"
          />
        </div>
        <div className="event-rightImg">
          <img
            className="event-img2"
            src="https://tumblbug-pci.imgix.net/d3257920215d297de816e473e280cbe3f3e8ec3f/cfaa347a44095d30d86d5860197a5ed238512272/c29a541d268e6cd3c6661f682ea8b4c612a004b9/0ab64d8f-8028-43e8-9ee5-3e99cc49de11.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=4d0ed09cd94d5d0aa63c1fb09ed6d81d"
            alt="eventImg"
          />
          <img
            className="event-img3"
            src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/AVG/image/mo4n3FLxWbd8mx8ucFwfY8yWqMw.jpg"
            alt="eventImg"
          />
        </div>
      </div>
    </div>
  );
};

export default EventComp;
