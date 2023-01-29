import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './menu-section-without-image.module.scss';

const MenuSectionWithoutImage = (props) => {
  const { title, menuList } = props;
  return (
    <div className={styles.root}>
      <SectionTitle title={title} />
      <div className={styles.gridContainer}>
        {menuList.map((menu) => 
          <div key={menu.id} className={styles.menu}>

            <div className={styles.main}>
              <div className={styles.titles}>
                <div>{menu.title}</div>
                <div>{menu.subTitle}</div>
              </div>
              <div>$ {menu.price.toFixed(2)}</div>
            </div>
            <hr className="solid" />
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

MenuSectionWithoutImage.propTypes = {
  title: PropTypes.string.isRequired,
  menuList: PropTypes.array.isRequired
};

export default MenuSectionWithoutImage;