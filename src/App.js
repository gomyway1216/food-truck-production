import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import { RefProvider } from './Provider/RefProvider';
import ApplicationBar from './Component/NavBar/ApplicationBar';
import useWindowSize from './Hook/useWindowSize';
import Footer from './Component/Footer/Footer';

const App = () => {
  const { width } = useWindowSize();

  return (
    <BrowserRouter >
      <RefProvider>
        {/* <ScrollToTop /> */}
        <ApplicationBar />
        <RouteList />
        {width < 1024 &&
          <Footer />
        }
      </RefProvider>
    </BrowserRouter>
  );
};

export default App;