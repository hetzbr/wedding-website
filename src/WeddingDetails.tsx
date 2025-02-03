import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './WeddingDetails.scss';

const WeddingDetails: React.FC = () => {
  return (
    <Box className="wedding-details">
      <div className="content">
        <div className="left-column">
          <Typography variant="h3">Wedding Details</Typography>
          <Typography variant="h5">Wedding Date</Typography>
          <Typography variant="body1">November 8th, 2025</Typography>
          <br />
          <Typography variant="h5">Reception Location</Typography>
          <Typography variant="body1">
            <Link href="https://www.copperhenkitchen.com/" target="_blank" className="wedding-details__link">
              The Copper Hen
            </Link>
            <br />
            2515 Nicollet Ave
            <br />
            Minneapolis, MN 55404
          </Typography>
        </div>

        <div className="right-column">
          <Typography variant="h5">From the Bride and Groom</Typography>
          <Typography variant="body1">
            To our nearest and dearest,
          <br />
          <br />
            Welcome to our wedding website! We hope this site will serve as a helpful guide in aiding the many people we love all over this country (MN, MA, FL, WI, NY, NH to name a few!) attend our “destination” wedding ;)
          </Typography>
          <br />
          <Typography variant="body1">
            Please note, in the case the information you are looking for is missing, we will be periodically updating this page with more specific details as the big day gets closer. For now, please simply join us in counting down the days till we can celebrate with all the people we love!
          </Typography>
          <br />
          <Typography variant="body1">
            Cheers, Ben and Charlotte
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default WeddingDetails;
