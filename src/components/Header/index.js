import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = ({ }) => {
  return (
    <AppBar position="static"  color='secondary' margin= '30px' padding='50px'>
      <Toolbar>
        <Typography variant="h6">
          User Details
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;