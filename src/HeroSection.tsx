import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './HeroSection.scss'; // Import the SCSS file for styling

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll update using requestAnimationFrame
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

  const baseURL = process.env.NODE_ENV === 'production' ? '/wedding-website/' : '/';

  return (
    <Box className="hero" id="hero">
      <img
        src={`${baseURL}images/bridge.jpg`} // Replace with your image path
        alt="Hero Background"
        className="hero-image"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`, // Slightly adjusted multiplier for smoother effect
        }}
      />
    </Box>
  );
};

export default Hero;
