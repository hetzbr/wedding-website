import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './HeroSection.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Hero: React.FC = () => {
  const baseURL = '/';

  return (
    <ParallaxLayer className="hero" id="hero" sticky={{start: 0, end: 2 }}>
      <img
        src={`${baseURL}images/bridge.jpg`}
        alt="Hero Background"
        className="hero-image"
      />
    </ParallaxLayer>
  );
};

export default Hero;
