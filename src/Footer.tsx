import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        Contact: wedding@example.com
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        Follow us on social media!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
