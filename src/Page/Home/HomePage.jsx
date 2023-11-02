import React, { useEffect, useRef, useState } from 'react';
import * as scheduleApi from '../../Firebase/schedule';
import { useRefContext } from '../../Context/RefContext';
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
import BREAKPOINTS from '../../Styling/breakpoints';
import { useMenu } from '../../Context/MenuContext';


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [scheduleList, setScheduleList] = useState([]);
  const { width } = useWindowSize();
  const { menus, musubiList, udonList, sideMenuList, dessertList, menuTypeExists } = useMenu();

  const bentoRef = useRef();
  const musubiRef = useRef();
  const udonRef = useRef();
  const sideMenuRef = useRef();
  const dessertRef = useRef();
  const locationRef = useRef();
  const aboutUsRef = useRef();
  const { addRefs } = useRefContext();

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
        <BentoSection menuList={menus} sectionRef={bentoRef} handleLoad={handleLoad} />
        {menuTypeExists.musubi &&
          <MenuSection title="MUSUBI" menuList={musubiList} sectionRef={musubiRef} />
        }
        {menuTypeExists.udon &&
          <MenuSection title="UDON" menuList={udonList} sectionRef={udonRef} />
        }
        {menuTypeExists.sideMenu &&
          <MenuSectionWithoutImage title="SIDE MENU" menuList={sideMenuList} 
            sectionRef={sideMenuRef} />
        }
        {menuTypeExists.dessert &&
          <MenuSectionWithoutImage title="DESSERT" menuList={dessertList} 
            sectionRef={dessertRef} />
        }
        <LocationSection scheduleList={scheduleList} sectionRef={locationRef} />
        <AboutUsSection sectionRef={aboutUsRef} />
        {width >= BREAKPOINTS.MD &&
          <FooterWide />
        }
      </div>
    </>
  );
};

export default HomePage;

