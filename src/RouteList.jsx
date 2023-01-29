import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home/HomePage';



const RouteList = () => {
  return (
    <div className="page-container">
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default RouteList;