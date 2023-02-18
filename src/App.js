import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import { RefProvider } from './Provider/RefProvider';
import ApplicationBar from './Component/NavBar/ApplicationBar';
import ScrollToTop from './Component/Scroll/ScrollToTop';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter >
      <RefProvider>
        <ScrollToTop />
        <ApplicationBar />
        <RouteList />
        <Footer />
      </RefProvider>
    </BrowserRouter>
  );
};

export default App;