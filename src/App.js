import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import { RefProvider } from './Provider/RefProvider';
import ApplicationBar from './Component/NavBar/ApplicationBar';
import useWindowSize from './Hook/useWindowSize';
import Footer from './Component/Footer/Footer';

const App = () => {
  const { width, height } = useWindowSize();

  return (
    <BrowserRouter >
      <RefProvider>
        {/* <ScrollToTop /> */}
        <ApplicationBar />
        <RouteList />
        {width / height < 4/3 &&
          <Footer />
        }
      </RefProvider>
    </BrowserRouter>
  );
};

export default App;