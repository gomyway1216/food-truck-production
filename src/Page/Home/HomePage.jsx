import React, { useEffect, useRef, useState } from 'react';
import * as menuApi from '../../Firebase/menu';
import * as scheduleApi from '../../Firebase/schedule';
import { useRefContext } from '../../Provider/RefProvider';
import MenuSection from '../../Component/MenuSection/MenuSection';
import MenuSectionWithoutImage
  from '../../Component/MenuSection/MenuSectionWithoutImage';
import LocationSection from '../../Component/LocationSection/LocationSection';
import AboutUsSection from '../../Component/AboutUsSection/AboutUsSection';
import FooterWide from '../../Component/Footer/FooterWide';
import useWindowSize from '../../Hook/useWindowSize';
import { Backdrop, CircularProgress } from '@mui/material';
import styles from './home-page.module.scss';
import BentoSection from '../../Component/BentoSection/BentoSection';


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [musubiList, setMusubiList] = useState([]);
  const [udonList, setUdonList] = useState([]);
  const [sideMenuList, setSideMenuList] = useState([]);
  const [dessertList, setDessertList] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const { width } = useWindowSize();
  const [allMenus, setAllMenus] = useState([]);

  const bentoRef = useRef();
  const musubiRef = useRef();
  const udonRef = useRef();
  const sideMenuRef = useRef();
  const dessertRef = useRef();
  const locationRef = useRef();
  const aboutUsRef = useRef();
  const { addRefs } = useRefContext();

  const sortList = (list) => {
    return list.sort((a, b) => a.order - b.order);
  };

  const getMenu = async () => {
    const menusResponse = await menuApi.getMenuList();
    setAllMenus(menusResponse);
    const menus = await menuApi.getPublicMenuList();
    const musubis = [];
    const udons = [];
    const sideMenus = [];
    const desserts = [];
    menus.forEach(menu => {
      if (menu.type === 'musubi') {
        musubis.push(menu);
      } else if (menu.type === 'udon') {
        udons.push(menu);
      } else if (menu.type === 'side menu') {
        sideMenus.push(menu);
      } else if (menu.type === 'dessert') {
        desserts.push(menu);
      }
    });
    setMusubiList(sortList(musubis));
    setUdonList(sortList(udons));
    setSideMenuList(sortList(sideMenus));
    setDessertList(sortList(desserts));
  };

  const getScheduleList = async () => {
    const schedules = await scheduleApi.getScheduleForMonth();
    setScheduleList(schedules);
  };

  const registerRefs = () => {
    const refList = [{ key: 'bento', ref: bentoRef }, { key: 'musubi', ref: musubiRef },
      { key: 'udon', ref: udonRef }, { key: 'sideMenu', ref: sideMenuRef },
      { key: 'dessert', ref: dessertRef }, { key: 'location', ref: locationRef },
      { key: 'aboutUs', ref: aboutUsRef }];
    addRefs(refList);
    window.scrollTo(0, 0);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    getMenu();
    getScheduleList();
    registerRefs();
  }, []);

  return (
    <>
      <Backdrop open={true} style={{
        display: loading
          ? 'flex' : 'none'
      }}>
        <CircularProgress style={{ 'color': 'white' }} />
      </Backdrop>
      <div className={styles.root}
        style={{
          display: !loading
            ? 'block' : 'none'
        }}>
        <BentoSection menuList={allMenus} sectionRef={bentoRef} handleLoad={handleLoad} />
        <MenuSection title="MUSUBI" menuList={musubiList} sectionRef={musubiRef} />
        <MenuSection title="UDON" menuList={udonList} sectionRef={udonRef} />
        <MenuSectionWithoutImage title="SIDE MENU" menuList={sideMenuList}
          sectionRef={sideMenuRef} />
        <MenuSectionWithoutImage title="DESSERT" menuList={dessertList} sectionRef={dessertRef} />
        <LocationSection scheduleList={scheduleList} sectionRef={locationRef} />
        <AboutUsSection sectionRef={aboutUsRef} />
        {width >= 1024 &&
          <FooterWide />
        }
      </div>
    </>
  );
};

export default HomePage;

