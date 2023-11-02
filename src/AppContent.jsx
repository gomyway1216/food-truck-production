import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useLoading } from './Context/LoadingContext';
import useWindowSize from './Hook/useWindowSize';
import BREAKPOINTS from './Styling/breakpoints';
import ApplicationBar from './Component/NavBar/ApplicationBar';
import Footer from './Component/Footer/Footer';
import RouteList from './RouteList';


const AppContent = () => {
  const { width } = useWindowSize();
  const { isLoading } = useLoading();

  return (
    <>
      <div style={{ display: !isLoading ? 'block' : 'none' }}>
        <ApplicationBar />
      </div>
      {/* Conditionally rendering the loading indicator based on isLoading state */}
      <Backdrop open={isLoading} style={{ zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        <CircularProgress style={{ 'color': 'white' }} />
      </Backdrop>
      <div style={{ display: !isLoading ? 'block' : 'none' }}>
        <RouteList />
      </div>
      {width < BREAKPOINTS.MD &&
        <Footer />
      }
    </>
  );
};

export default AppContent;