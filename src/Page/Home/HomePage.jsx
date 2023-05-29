import React, { useEffect, useRef, useState } from 'react';
import * as menuApi from '../../Firebase/menu';
import * as scheduleApi from '../../Firebase/schedule';
import { useRefContext } from '../../Provider/RefProvider';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import MenuSection from '../../Component/MenuSection/MenuSection';
import MenuSectionWithoutImage 
  from '../../Component/MenuSection/MenuSectionWithoutImage';
import LocationSection from '../../Component/LocationSection/LocationSection';
import AboutUsSection from '../../Component/AboutUsSection/AboutUsSection';
import FooterWide from '../../Component/Footer/FooterWide';
import useWindowSize from '../../Hook/useWindowSize';
import { Backdrop, CircularProgress } from '@mui/material';
import styles from './home-page.module.scss';


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [musubiList, setMusubiList] = useState([]);
  const [udonList, setUdonList] = useState([]);
  const [sideMenuList, setSideMenuList] = useState([]);
  const [dessertList, setDessertList] = useState([]);
  const [bentoInfo, setBentoInfo] = useState(null);
  const [scheduleList, setScheduleList] = useState([]);
  const { width, height } = useWindowSize();

  const bentoRef= useRef();
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

  const collectDataForBento = (allMenus) => {
    const bentoInfo = allMenus.find(menu =>
      menu.title.includes('MUSUBI BENTO'));
    const karaageInfo = allMenus.find(menu => 
      menu.title.includes('CHICKEN KARAAGE'));
    const edamameInfo = allMenus.find(menu => 
      menu.title === 'EDAMAME');
    const crackerInfo = allMenus.find(menu => 
      menu.title.includes('FRIED PRAWN CRACKER'));
    const misoSoupInfo = allMenus.find(menu => 
      menu.title.includes('MISO SOUP'));
    const bentoData = {
      'BENTO': {
        'name': bentoInfo.title,
        'image': bentoInfo.image,
        'price': bentoInfo.price
      },
      'KARAAGE': {
        'description': karaageInfo.description,
        'ingredients': karaageInfo.ingredients
      },
      'EADAMAME': {
        'description': edamameInfo.description,
        'ingredients': edamameInfo.ingredients
      },
      'CRACKER': {
        'description': crackerInfo.description,
        'ingredients': crackerInfo.ingredients
      },
      'SOUP': {
        'description': misoSoupInfo.description,
        'ingredients': misoSoupInfo.ingredients
      }
    };
    setBentoInfo(bentoData);
  };

  const getMenu = async () => {
    const allMenus = await menuApi.getMenuList();
    collectDataForBento(allMenus);
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
      <Backdrop open={true} style={{display: loading 
        ? 'flex' : 'none'}}>
        <CircularProgress style={{'color': 'white'}}/>
      </Backdrop>
      <div className={styles.root}
        style={{display: !loading 
          ? 'block' : 'none'}}>
        <div className={styles.bento} ref={bentoRef}>
          <SectionTitle title="BENTO" />
          <div className={styles.bentoInfo}>
            <img src={bentoInfo?.BENTO.image} alt="Bento Image" className={styles.menuImage}
              onLoad={handleLoad} 
            />
            <div className={styles.right}>
              <div className={styles.main}>
                <div className={styles.title}>{bentoInfo?.BENTO.name}</div>
                <div className={styles.price}>$ {bentoInfo?.BENTO.price.toFixed(2)}</div>
              </div>
              <div className={styles.contents}>
                {width >= 768 ?   
                  <>
                    <div className={styles.musubi}>CHOOSE 2&nbsp;MUSUBI</div>
                    <div className={styles.plus}>+</div>
                    <div className={styles.side}>CHOOSE KARAAGE&nbsp;or&nbsp;EDAMAME</div>
                    <div className={styles.plus}>+</div>
                    <div className={styles.cracker}>FRIED PRAWN CRACKER</div>
                    <div className={styles.plus}>+</div>
                    <div className={styles.soup}>MISO SOUP</div>
                  </>
                  :
                  <>
                    <div className={styles.firstRow}> 
                      <div className={styles.musubi}>CHOOSE 2&nbsp;MUSUBI</div>
                      <div className={styles.plus}>+</div>
                      <div className={styles.side}>CHOOSE KARAAGE&nbsp;or&nbsp;EDAMAME</div>
                    </div>
                    <div className={styles.secondRow}> 
                      <div className={styles.cracker}>FRIED PRAWN CRACKER</div>
                      <div className={styles.plus}>+</div>
                      <div className={styles.soup}>MISO SOUP</div>
                    </div>
                  </>
                }
              </div>
              <div className={styles.subSection}>
                <div className={styles.subSectionItem}>
                  <div className={styles.subSectionItemContent}>
                    <div className={styles.itemTitle}>KARAAGE</div>
                    <div className={styles.description}>{bentoInfo?.KARAAGE.description}</div>
                    <div className={styles.ingredients}>
                      {bentoInfo?.KARAAGE.ingredients.map((ingredient) => 
                        <div key={'BENTO-KARAAGE-' + ingredient}
                          className={styles.ingredient}> 
                          {ingredient.toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.verticalLine}/>
                <div className={styles.subSectionItem}>
                  <div className={styles.subSectionItemContent}>
                    <div className={styles.itemTitle}>EADAMAME</div>
                    <div className={styles.description}>{bentoInfo?.EADAMAME.description}</div>
                    <div className={styles.ingredients}>
                      {bentoInfo?.EADAMAME.ingredients.map((ingredient) => 
                        <div key={'BENTO-EADAMAME-' + ingredient}
                          className={styles.ingredient}> 
                          {ingredient.toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.verticalLine}/>
                <div className={`${styles.subSectionItem} ${styles.cracker}`}>
                  <div className={styles.subSectionItemContent}>
                    <div className={`${styles.itemTitle} ${styles.cracker}`}>
                    FRIED PRAWN CRACKER
                    </div>
                    <div className={styles.description}>{bentoInfo?.CRACKER.description}</div>
                    <div className={styles.ingredients}>
                      {bentoInfo?.CRACKER.ingredients.map((ingredient) => 
                        <div key={'BENTO-CRACKER-' + ingredient}
                          className={styles.ingredient}> 
                          {ingredient.toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.verticalLine}/>
                <div className={`${styles.subSectionItem} ${styles.soup}`}>
                  <div className={styles.subSectionItemContent}>
                    <div className={styles.itemTitle}>MISO SOUP</div>
                    <div className={styles.description}>{bentoInfo?.SOUP.description}</div>
                    <div className={styles.ingredients}>
                      {bentoInfo?.SOUP.ingredients.map((ingredient) => 
                        <div key={'BENTO-SOUP-' + ingredient}
                          className={styles.ingredient}> 
                          {ingredient.toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <MenuSection title="MUSUBI" menuList={musubiList} sectionRef={musubiRef} />
        <MenuSection title="UDON" menuList={udonList} sectionRef={udonRef} />
        <MenuSectionWithoutImage title="SIDE MENU" menuList={sideMenuList} 
          sectionRef={sideMenuRef}/>
        <MenuSectionWithoutImage title="DESSERT" menuList={dessertList} sectionRef={dessertRef}/>
        <LocationSection scheduleList={scheduleList} sectionRef={locationRef}/>
        <AboutUsSection sectionRef={aboutUsRef} />
        { width / height >= 4/3 &&
          <FooterWide />
        }    
      </div>
    </>
  );
};

export default HomePage;