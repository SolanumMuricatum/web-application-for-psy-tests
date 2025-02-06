import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function AppBarComponent({}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#33266E' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Button sx={{ color: 'white', fontSize: '13pt' }}>Психология управления и развития человеческих ресурсов</Button>
          </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
