import React, { useState } from 'react';
import { useRefContext } from '../../Context/RefContext';
import {AppBar, Box, Drawer, Toolbar, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import useWindowSize from '../../Hook/useWindowSize';
import TokachiLogo2 from '../../asset/logo/Tokachi_Musubi_Hokkaido_Logo_iPhone.png';
import TokachiLogoWide2 from '../../asset/logo/Tokachi_Musubi_Hokkaido_Logo_PC.png';
import xIcon from '../../asset/icon/x.png';
import facebookIcon from '../../asset/icon/facebook.png';
import instagramIcon from '../../asset/icon/instagram.png';
import styles from './application-bar.module.scss';
import BREAKPOINTS from '../../Styling/breakpoints';
import { useMenu } from '../../Context/MenuContext';

const scrollOffset = 80;

const ApplicationBar = () => {
  const [open, setOpen] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const { refs } = useRefContext();
  const { width } = useWindowSize();
  const { menuTypeExists } = useMenu();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClick = () => {
    setMenuExpanded(!menuExpanded);
  };

  const scrollToDiv = (refName, offset) => {
    handleDrawerClose();
    if(refs.length === 0) {
      return;
    }

    const ref = refs.find(elm => elm.key === refName).ref;
    // offset for the appBar;
    const top = ref.current.offsetTop - offset;
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.root}>
      <AppBar position="fixed" className={styles.bar}>
        {width < BREAKPOINTS.MD && 
          <Toolbar sx={{ paddingLeft: '4px'}}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <img src={TokachiLogo2} className={styles.logo}/>
          </Toolbar>
        }
      </AppBar>
      {width >= BREAKPOINTS.MD &&
        <div className={styles.fixedNavigation}>
          <div className={styles.wideToolBar}>
            <img src={TokachiLogoWide2} className={styles.wideLogo}/>
            <div className={styles.right}>
              <div className={styles.topRow}>
                <div className={styles.title}>JAPANESE RICE BALL — STICKY, CRUNCHY, AND NICE!</div>
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
              <div className={styles.bottomRow}>
                <div className={styles.description}>FOOD TRUCK FOR SAN FRANCISCO / BAY AREA</div>
                <div className={styles.verticalLine}/>
                <div className={styles.sections}>
                  <div className={styles.sectionItem}
                    onClick={() => scrollToDiv('musubi', scrollOffset)}>MENU</div>
                  <div className={styles.sectionItem}
                    onClick={() => scrollToDiv('location', scrollOffset)}>LOCATION</div>
                  <div className={styles.sectionItem} 
                    onClick={() => scrollToDiv('aboutUs', scrollOffset)}>ABOUT US</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menus}>
            <div className={styles.menuItem} 
              onClick={() => scrollToDiv('bento', scrollOffset)}>BENTO</div>
            {menuTypeExists.musubi &&
              <div className={styles.menuItem}
                onClick={() => scrollToDiv('musubi', scrollOffset)}>MUSUBI</div>
            }
            {menuTypeExists.udon &&
              <div className={styles.menuItem}
                onClick={() => scrollToDiv('udon', scrollOffset)}>UDON</div>
            }
            {menuTypeExists.sideMenu &&
              <div className={styles.menuItem}
                onClick={() => scrollToDiv('sideMenu', scrollOffset)}>SIDE MENU</div>
            }
            {menuTypeExists.dessert &&
              <div className={styles.menuItem}
                onClick={() => scrollToDiv('dessert', scrollOffset)}>DESSERT</div>
            }
          </div>
        </div>
      }
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            boxSizing: 'border-box',
            color: 'white',
            background: '#222021'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className={styles.drawer}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={handleDrawerClose} className={styles.clearButton}>
            <ClearIcon />
          </IconButton>
          {/* <div className={styles.logoWrapper}>
            <img src={TokachiLogo} className={styles.logo}/>
          </div> */}
          <img src={TokachiLogo2} className={styles.logo}/>
        </div>
        <div className={styles.drawerBody}>
          <div className={styles.main}>
            <div className={styles.items}>
              <div className={`${styles.item} ${styles.menuRow}`}>
                <div onClick={handleMenuClick} className={styles.item}>MENU</div>
                <IconButton onClick={handleMenuClick}>
                  {menuExpanded ? 
                    <ExpandMoreIcon className={styles.expandIcon}/> :
                    <ChevronRightIcon className={styles.expandIcon}/>
                  }
                </IconButton>
              </div>
              {menuExpanded && 
                <div>
                  <div className={styles.menuItem} 
                    onClick={() => scrollToDiv('bento', scrollOffset)}>BENTO</div>
                  {menuTypeExists.musubi &&
                    <div className={styles.menuItem}
                      onClick={() => scrollToDiv('musubi', scrollOffset)}>MUSUBI</div>
                  }
                  {menuTypeExists.udon &&
                    <div className={styles.menuItem}
                      onClick={() => scrollToDiv('udon', scrollOffset)}>UDON</div>
                  }
                  {menuTypeExists.sideMenu &&
                    <div className={styles.menuItem}
                      onClick={() => scrollToDiv('sideMenu', scrollOffset)}>SIDE MENU</div>
                  }
                  {menuTypeExists.dessert &&
                    <div className={styles.menuItem}
                      onClick={() => scrollToDiv('dessert', scrollOffset)}>DESSERT</div>
                  }
                </div>
              }
              <div className={styles.item}
                onClick={() => scrollToDiv('location', scrollOffset)}>LOCATION</div>
              <div className={styles.item} 
                onClick={() => scrollToDiv('aboutUs', scrollOffset)}>ABOUT US</div>
            </div>
            <div className={styles.container}>
              <a href="https://www.instagram.com/tokachi_musubi/" >
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={instagramIcon} 
                    alt="Instagram"/>
                </div>
              </a>
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
            </div>
          </div>
        </div>
      </Drawer>
    </Box>
  );
};


export default ApplicationBar;