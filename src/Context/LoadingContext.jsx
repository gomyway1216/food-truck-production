import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LoadingContext = createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(1);
  const isLoading = loadingCount > 0;

  const startLoading = () => setLoadingCount((prev) => (prev + 1));
  const endLoading = () => setLoadingCount((prev) => Math.max(0, prev - 1));

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, endLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.any
};