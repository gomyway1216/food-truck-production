import React, { useEffect, useState } from 'react';
import * as menuApi from '../../Firebase/menu';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import MenuSection from '../../Component/MenuSection/MenuSection';
import MenuSectionWithoutImage 
  from '../../Component/MenuSection/MenuSectionWithoutImage';
import styles from './home-page.module.scss';


const HomePage = () => {
  const [menuList, setMenuList] = useState([]);
  const [musubiList, setMusubiList] = useState([]);
  const [udonList, setUdonList] = useState([]);
  const [sideMenuList, setSideMenuList] = useState([]);
  const [dessertList, setDessertList] = useState([]);

  const sortList = (list) => {
    return list.sort((a, b) => a.order - b.order);
  };

  const getMenu = async () => {
    const menus = await menuApi.getPublicMenuList();
    const musubis = [];
    const udons = [];
    const sideMenus = [];
    const desserts = [];
    menus.forEach(menu => {
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
    setMenuList(menus);
    setMusubiList(sortList(musubis));
    setUdonList(sortList(udons));
    setSideMenuList(sortList(sideMenus));
    setDessertList(sortList(desserts));
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.bento}>
        <SectionTitle title="BENTO" />
      </div>
      <MenuSection title="MUSUBI" menuList={musubiList} />
      <MenuSection title="UDON" menuList={udonList} />
      <MenuSectionWithoutImage title="SIDE MENU" menuList={sideMenuList} />
      <MenuSectionWithoutImage title="DESSERT" menuList={dessertList} />
    </div>
  );
};

export default HomePage;