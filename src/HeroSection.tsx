import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './HeroSection.scss';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseURL = '/';

  return (
    <Box className="hero" id="hero">
      <img
        src={`${baseURL}images/bridge.jpg`}
        alt="Hero Background"
        className="hero-image"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
    </Box>
  );
};

export default Hero;
