import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Registry: React.FC = () => {
  return (
    <Box sx={{ padding: '50px 20px', backgroundColor: '#f7f7f7' }} id="registry">
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
        Wedding Registry
      </Typography>
      <Typography sx={{ textAlign: 'center', mb: 4 }}>
        Your presence is the greatest gift, but if you'd like to contribute, here's where we are registered:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Button variant="contained" href="https://www.registry.com" target="_blank">
          Amazon Registry
        </Button>
        <Button variant="contained" href="https://www.registry2.com" target="_blank">
          Target Registry
        </Button>
      </Box>
    </Box>
  );
};

export default Registry;
