import React from 'react';
import './WeddingDetails.scss'; // Import Sass stylesheet
import { Box, Typography, Link } from '@mui/material';

const WeddingDetails: React.FC = () => {
  return (
    <Box className="wedding-details">
      <div className="content">
        <div className="left-column">
          <Typography variant="h3">Wedding Details</Typography>
          <Typography variant="h5">Wedding Date</Typography>
          <Typography variant="body1">November 7th, 2025</Typography>
          <div>
          <br />
            <Typography variant="h5">Reception Location</Typography>
            <Typography variant="body1">
              <Link href="https://www.copperhenkitchen.com/" target="_blank" className="wedding-details__link">
                The Copper Hen
              </Link>
            </Typography>
          </div>
        </div>

        <div className="right-column">
          <Typography variant="h5">A Note from the Bride and Groom</Typography>
          <Typography variant="body1">
            Dear Friends and Family, We&apos;re so excited to have you join us as we celebrate this special day. Your love and support mean so much to us, and we are incredibly grateful to share this moment with the people who have played such an important role in our lives.
          </Typography>
          <br />
          <Typography variant="body1">
            As we start this new chapter together, we look forward to the many memories we&apos;ll create with all of you. Thank you for being here and for all the ways you&apos;ve supported us along the way. Here&apos;s to an unforgettable celebration!
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
