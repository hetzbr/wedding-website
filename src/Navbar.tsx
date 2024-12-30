import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="white" sx={{ fontFamily: 'Playfair Display, serif' }}>
            Scherer Wedding
          </Typography>
        </Box>
        <Button component={Link} to="/" sx={{ color: 'white' }}>
          Home
        </Button>
        <Button component={Link} to="/gallery" sx={{ color: 'white' }}>
          Gallery
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
