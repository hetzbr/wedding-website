import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './Schedule.scss';

const Schedule: React.FC = () => {
  return (
    <Box className="schedule">
      <div className="content">
        <div className="left-column">
        <Typography variant="h3" gutterBottom>
          Schedule
        </Typography>
        <Typography variant="h5">Friday, November 7th</Typography>
            <Typography variant="body1">
              <span className="schedule__bold">Welcome dinner and drinks</span>
            </Typography>
            <Typography variant="body1">6pm-9pm CT</Typography>

            <Typography variant="body1">
              <Link href="https://www.sociablecider.com" target="_blank" className="schedule__link">Sociable Cider Werks</Link>
            </Typography>
            <Typography variant="body1">
              All are invited, catered dinner and cash bar for drinks available.
            </Typography>
        </div>

        <div className="right-column">
        <Typography variant="h3" gutterBottom className="placeholder">
          Schedule
        </Typography>
        <Typography variant="h5">Saturday, November 8th</Typography>
        <Typography variant="body1">
            <span className="schedule__bold">Wedding Day</span>
          </Typography>
          <Typography variant="body1">5pm CT</Typography>
          <Typography variant="body1">
              <Link href="https://www.copperhenkitchen.com" target="_blank" className="schedule__link">The Copper Hen</Link>
            </Typography>
            <Typography variant="body1">
              The big day!!
            </Typography>
            <div className="placeholder">placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder</div>
        </div>
      </div>
    </Box>
  );
};

export default Schedule;
