import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './bento-section.module.scss';
import useWindowSize from '../../Hook/useWindowSize';


const BentoSection = (props) => {
  const { menuList, sectionRef, handleLoad } = props;
  const [bentoInfo, setBentoInfo] = useState(null);
  const { width } = useWindowSize();

  useEffect(() => {
    collectDataForBento(menuList);
  }, [menuList]);


  const collectDataForBento = (allMenus) => {
    if(!allMenus || allMenus.length == 0) {
      return;
    }
    
    const bentoInfo = allMenus.find(menu =>
      menu.title.includes('MUSUBI BENTO'));
    const karaageInfo = allMenus.find(menu =>
      menu.title.includes('CHICKEN KARAAGE'));
    const edamameInfo = allMenus.find(menu =>
      menu.title === 'EDAMAME');
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
      'SOUP': {
        'description': misoSoupInfo.description,
        'ingredients': misoSoupInfo.ingredients
      }
    };
    setBentoInfo(bentoData);
  };

  console.log('rendering condition: ', (width >= 768 && width < 1024) || width >= 1440);

  return (
    <div className={styles.root} ref={sectionRef}>
      <SectionTitle title="BENTO" />
      <div className={styles.bentoInfo}>
        <div className={styles.bentoImageContainer}>
          <img src={bentoInfo?.BENTO.image} alt="Bento Image" className={styles.menuImage}
            onLoad={handleLoad}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.main}>
            <div className={styles.title}>{bentoInfo?.BENTO.name}</div>
            <div className={styles.price}>$ {bentoInfo?.BENTO.price.toFixed(2)}</div>
          </div>
          <div className={styles.contents}>
            {((width >= 768 && width < 1024) || width >= 1440) ?
              <>
                <div className={styles.musubi}>CHOOSE 2&nbsp;MUSUBI</div>
                <div className={styles.plus}>+</div>
                <div className={styles.side}>CHICKEN KARAAGE</div>
                <div className={styles.plus}>+</div>
                <div className={styles.edamame}>EDAMAME</div>
                <div className={styles.plus}>+</div>
                <div className={styles.soup}>MISO SOUP</div>
              </>
              :
              <>
                <div className={styles.row}>
                  <div className={styles.box}>CHOOSE 2&nbsp;MUSUBI</div>
                  <div className={styles.plus}>+</div>
                  <div className={styles.box}>CHICKEN KARAAGE</div>
                </div>
                <div className={styles.row}>
                  <div className={styles.box}>EDAMAME</div>
                  <div className={styles.plus}>+</div>
                  <div className={styles.box}>MISO SOUP</div>
                </div>
              </>
            }
          </div>
          <div className={styles.subSection}>
            <div className={styles.subSectionItem}>
              <div className={styles.subSectionItemContent}>
                <div className={styles.itemTitle}>CHICKEN KARAAGE</div>
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
            <div className={styles.verticalLine} />
            <div className={styles.subSectionItem}>
              <div className={styles.subSectionItemContent}>
                <div className={styles.itemTitle}>EDAMAME</div>
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
            <div className={styles.verticalLine} />
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
  );
};

BentoSection.propTypes = {
  menuList: PropTypes.array.isRequired,
  sectionRef: PropTypes.object,
  handleLoad: PropTypes.func.isRequired
};

export default BentoSection;