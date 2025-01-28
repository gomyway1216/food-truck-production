import React from 'react';
import xIcon from '../../asset/icon/x.png';
import facebookIcon from '../../asset/icon/facebook.png';
import instagramIcon from '../../asset/icon/instagram.png';
import styles from './footer-wide.module.scss';

const FooterWide = () => {
  return (
    <div className={styles.root}>
      <div>© TOKACHI MUSUBI 2025</div>
      <div>FOOD TRUCK FOR SAN FRANCISCO / BAY AREA</div>
      <div className={styles.icons}>
        <a href="https://x.com/erikatokachi" >
          <div className={styles.imageContainer}>
            <img className={styles.image} src={xIcon} alt="X" />
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100087156172865" >
          <div className={styles.imageContainer}>
            <img className={styles.image} src={facebookIcon} 
              alt="Facebook" />
          </div>
        </a>
        <a href="https://www.instagram.com/tokachi_musubi/" >
          <div className={styles.imageContainer}>
            <img className={styles.image} src={instagramIcon} 
              alt="Instagram"/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterWide;