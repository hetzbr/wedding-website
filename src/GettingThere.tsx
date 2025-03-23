import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './GettingThere.scss';

const GettingThere: React.FC = () => {
  const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <Box className="getting-there">
        <Box className="content">
          <div className="left-column">
            <Typography variant="h3" gutterBottom>
              Where to Stay
            </Typography>
            <Typography variant="h5">Hyatt Downtown</Typography>
            <Typography variant="body1">
              We booked a hotel block at the&nbsp;
              <Link href="https://www.hyatt.com/en-US/hotel/minnesota/hyatt-place-minneapolis-downtown/mspzd?corp_id=G-osln" target="_blank">
                Hyatt Place Minneapolis/Downtown
              </Link>
              . Use code G-OSLN for the group code (must be all capitals) when booking.
            </Typography>
          </div>
          <div className="right-column">
            <Box className="getting-there-right">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=Hyatt+Place+Minneapolis/Downtown,+Minneapolis,+MN`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            />
            </Box>
          </div>
        </Box>
    </Box>
  );
};

export default GettingThere;
