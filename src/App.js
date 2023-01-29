import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import ApplicationBar from './Component/NavBar/ApplicationBar';

const App = () => {
  return (
    <BrowserRouter >
      <ApplicationBar />
      <RouteList />
    </BrowserRouter>
  );
};

export default App;