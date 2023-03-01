import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './menu-section.module.scss';

const MenuSection = (props) => {
  const { title, menuList, sectionRef } = props;

  return (
    <div className={styles.root} ref={sectionRef}>
      <SectionTitle title={title} />
      <div className={styles.gridContainer}>
        {menuList.map((menu) => 
          <div key={menu.id} className={styles.menu}>
            <img src={menu.image} alt={menu.title} 
              className={styles.menuImage}/>
            <div className={styles.main}>
              <div className={styles.titles}>
                <div>{menu.title}</div>
                <div className={styles.subTitle}>{menu.subTitle}</div>
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