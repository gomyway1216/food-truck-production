import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RefProvider } from './Context/RefContext';
import { MenuProvider } from './Context/MenuContext';
import { LoadingProvider } from './Context/LoadingContext';
import AppContent from './AppContent';

const App = () => {

  return (
    <BrowserRouter >
      <LoadingProvider>
        <MenuProvider>
          <RefProvider>
            <AppContent />
          </RefProvider>
        </MenuProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;