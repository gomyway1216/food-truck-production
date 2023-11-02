import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as menuApi from '../Firebase/menu';
import { useLoading } from './LoadingContext';

const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};


export const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [musubiList, setMusubiList] = useState([]);
  const [udonList, setUdonList] = useState([]);
  const [sideMenuList, setSideMenuList] = useState([]);
  const [dessertList, setDessertList] = useState([]);
  const [menuTypeExists, setMenuTypeExists] = useState({
    musubi: false,
    udon: false,
    sideMenu: false,
    dessert: false
  });
  const { startLoading, endLoading } = useLoading();
  
  const sortList = (list) => {
    return list.sort((a, b) => a.order - b.order);
  };

  const getMenu = async () => {
    startLoading();
    const menuResponse = await menuApi.getPublicMenuList();
    setMenus(menuResponse);
    const musubis = [];
    const udons = [];
    const sideMenus = [];
    const desserts = [];
    menuResponse.forEach(menu => {
      if(menu.type === 'musubi') {
        musubis.push(menu);
      } else if(menu.type === 'udon') {
        udons.push(menu);
      } else if(menu.type === 'side menu') {
        sideMenus.push(menu);
      } else if(menu.type === 'dessert') {
        desserts.push(menu);
      }
    });

    setMenuTypeExists({
      musubi: musubis.length > 0,
      udon: udons.length > 0,
      sideMenu: sideMenus.length > 0,
      dessert: desserts.length > 0
    });

    setMusubiList(sortList(musubis));
    setUdonList(sortList(udons));
    setSideMenuList(sortList(sideMenus));
    setDessertList(sortList(desserts));
    endLoading();
  };

  useEffect(() => {
    getMenu();
  }, []);

  const value = {
    menus,
    musubiList,
    udonList,
    sideMenuList,
    dessertList,
    menuTypeExists
  };
  
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.any
};