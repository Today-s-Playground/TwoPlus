import React from 'react';
import { ListSection } from '../../styles/MyMainStyles';
import { useNavigate } from 'react-router-dom';
import '../../styles/MyPageCss.css';
import gameImage1 from '../../images/gameImage1.png';
import gameImage2 from '../../images/gameImage2.png';
import gameImage3 from '../../images/gameImage3.png';
import gameImage4 from '../../images/gameImage4.png';

function ListCard() {
  const navigate = useNavigate();
  const images = [gameImage1, gameImage2, gameImage3, gameImage4];

  return (
    <ListSection>
      <div className="purchaseList">구매목록 ➡️</div>
      <div className="purchaseImg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="게임 이미지"
            className="mypage-game"
            onClick={() => navigate(`/game/${index + 1}`)}
          />
        ))}
      </div>
    </ListSection>
  );
}

export default ListCard;
