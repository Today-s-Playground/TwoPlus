import React from 'react';
import { InforState } from '../../styles/MyMainStyles';

function InfoCard({ title, number }) {
  return (
    <InforState>
      <p className="title">{title}</p>
      <p className="number">{number}</p>
    </InforState>
  );
}

export default InfoCard;
