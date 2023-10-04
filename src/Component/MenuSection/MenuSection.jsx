import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './menu-section.module.scss';

const MenuSection = (props) => {
  const { title, menuList, sectionRef } = props;
  const gridContainerRef = useRef(null);

  useEffect(() => {
    const sectionTitle = gridContainerRef.current.previousSibling;
    const sectionTitleHeight = sectionTitle.getBoundingClientRect().height;
    const marginTop = title === 'MUSUBI' ? '17px' : title === 'UDON' ? '6px' : '0px';
    const marginBottom = `calc(67px - ${sectionTitleHeight / 2}px)`;
    // gridContainerRef.current.style.marginTop = marginTop;
    // gridContainerRef.current.style.marginBottom = marginBottom;
  }, []);

  return (
    <div className={styles.root} ref={sectionRef}>
      <SectionTitle title={title} />
      <div className={styles.gridContainer} ref={gridContainerRef}>
        {menuList.map((menu) => 
          <div key={menu.id} className={styles.menu}>
            <img src={menu.image} alt={menu.title} 
              className={styles.menuImage}/>
            <div className={styles.main}>
              <div className={styles.titles}>
                <p className={styles.title}>{menu.title}</p>
                <p className={styles.subTitle}>{menu.subTitle}</p>
              </div>
              <div className={styles.price}>$ {menu.price.toFixed(2)}</div>
            </div>
            <div className={styles.subSection}>
              <div className={styles.description}>{menu.description}</div>
              <div className={styles.ingredients}>
                {menu.ingredients.map((ingredient) => 
                  <div key={menu.title + '-' + ingredient}
                    className={styles.ingredient}> 
                    {ingredient.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  menuList: PropTypes.array.isRequired,
  sectionRef: PropTypes.object
};

export default MenuSection;