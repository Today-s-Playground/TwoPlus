import React from 'react';
import { ListSection } from '../../styles/MyMainStyles';

function ListCard() {
  const images = [
    'https://ifh.cc/g/0Mpn4r.png',
    'https://ifh.cc/g/AbVXMx.png',
    'https://ifh.cc/g/kNDdqB.jpg',
    'https://ifh.cc/g/gfmrGf.png'
  ];

  return (
    <ListSection>
      <div className="purchaseList">구매목록 ➡️</div>
      <div className="purchaseImg">
        {images.map((src, index) => (
          <img key={index} src={src} alt="게임 이미지" />
        ))}
      </div>
    </ListSection>
  );
}

export default ListCard;
