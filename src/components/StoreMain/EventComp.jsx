import React, { useEffect, useState } from 'react';
import GameApi from './GameApi';
import './EventComp.css';
import styled from 'styled-components';

const CategorieImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

function EventComp() {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GameApi.getGenreList.then((resp) => {
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="title">Categorie</h2>
      <div className="categorieList-frame">
        {genreList.map((item) => (
          <div className="categorie-list">
            <CategorieImg src={item.image_background} className="categorie-img" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventComp;

// import React from 'react';
// import './EventComp.css';

// const EventComp = ({ largeImage, smallImages }) => {
//   return (
//     <div className="EventComp">
//       <header className="event-title">할인 이벤트</header>
//       <div className="event-frame">
//         <div className="event-leftImg">
//           <img className="event-img1" src={largeImage} alt="eventImg" />
//         </div>
//         <div className="event-rightImg">
//           {smallImages.map((image, index) => (
//             <img key={index} className={`event-img${index + 2}`} src={image} alt="eventImg" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventComp;
