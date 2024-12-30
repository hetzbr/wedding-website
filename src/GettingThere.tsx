import React from 'react';
import { Box, Typography } from '@mui/material';

const GettingThere: React.FC = () => {
  return (
    <Box sx={{ padding: '50px 20px' }} id="getting-there">
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
        Getting There
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 600 }}>
        Location
      </Typography>
      <Typography sx={{ textAlign: 'center', mt: 2 }}>
        XYZ Venue, 1234 Wedding Rd, City, State, ZIP
      </Typography>
      <Typography sx={{ textAlign: 'center', mt: 2 }}>
        For those flying in, the nearest airport is ABC International Airport, located 20 minutes away.
      </Typography>
    </Box>
  );
};

export default GettingThere;
