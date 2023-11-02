import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import { RefProvider } from './Context/RefContext';
import ApplicationBar from './Component/NavBar/ApplicationBar';
import useWindowSize from './Hook/useWindowSize';
import Footer from './Component/Footer/Footer';
import BREAKPOINTS from './Styling/breakpoints';
import { MenuProvider } from './Context/MenuContext';

const App = () => {
  const { width } = useWindowSize();

  return (
    <BrowserRouter >
      <MenuProvider>
        <RefProvider>
          <ApplicationBar />
          <RouteList />
          {width < BREAKPOINTS.MD &&
            <Footer />
          }
        </RefProvider>
      </MenuProvider>
    </BrowserRouter>
  );
};

export default App;