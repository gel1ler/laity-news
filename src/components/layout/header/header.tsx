import React from 'react';
import {
  AppBar,
  Toolbar,
} from '@mui/material'
import MyToolbar from './toolbar';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "primary.dark",
      }}
    >
      <Toolbar className="container mx-auto">
        <MyToolbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;