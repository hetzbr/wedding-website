import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './Registry.scss';

const Registry: React.FC = () => {
  return (
    <Box className="registry">
      <div className="content">
        <div className="left-column">
          <Typography variant="h3">Registry</Typography>
          <Typography variant="body1">
          Your presence on our day is the greatest gift. However, if you wish to contribute, <Link href="https://www.honeyfund.com/site/olson-hetzer-11-08-2025" target="_blank" className="registry__link">Ben and Charlotte's honeyfund</Link> is available.
          </Typography>
        </div>

        <div className="right-column">
        <Typography variant="h5" className="placeholder">placeholder placeholder placeholder</Typography>
        </div>
      </div>
    </Box>




    // <Box sx={{ padding: '50px 20px', backgroundColor: '#f7f7f7' }} id="registry">
    //   <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
    //     Wedding Registry
    //   </Typography>
    //   <Typography sx={{ textAlign: 'center', mb: 4 }}>
    //     Your presence is the greatest gift, but if you'd like to contribute, we will update this section with a honeymoon fund at a later date.
    //   </Typography>
    //   <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
    //     { /* TODO: add registry */ }
    //     {/* <Button variant="contained" href="https://www.registry.com" target="_blank">
    //       Amazon Registry
    //     </Button>
    //     <Button variant="contained" href="https://www.registry2.com" target="_blank">
    //       Target Registry
    //     </Button> */}
    //   </Box>
    // </Box>
  );
};

export default Registry;
