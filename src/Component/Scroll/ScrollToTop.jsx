import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

ScrollToTop.propTypes = {
  children: PropTypes.any
};

export default ScrollToTop;