import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '../elements/Button';
import { Link } from 'react-router-dom';

export function AppBarComponent({}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#33266E' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/web-application-for-psy-tests/">
            <Button text='Психология управления и развития человеческих ресурсов' backgroundColor="transparent" hoverColor="transparent" fontSize="21px"/>
          </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
