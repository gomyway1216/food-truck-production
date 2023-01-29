import React, { useState } from 'react';
import {AppBar, Box, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './application-bar.module.scss';
import TokachiLogo from '../../asset/logo/Tokachi-Musubi-Logo.png';


const ApplicationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.root}>
      <AppBar position="static" className={styles.bar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={TokachiLogo} className={styles.logo}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default ApplicationBar;