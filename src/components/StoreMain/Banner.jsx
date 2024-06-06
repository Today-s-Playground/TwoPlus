import React, { useEffect } from 'react';
import styled from 'styled-components';

const BannerFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;

const Banner = ({ gameBanner }) => {
  return (
    <BannerFrame className="bannerFrame">
      <BannerImg src={gameBanner.background_image} />
    </BannerFrame>
  );
};

export default Banner;
