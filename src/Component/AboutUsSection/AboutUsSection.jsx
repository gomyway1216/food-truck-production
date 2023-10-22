import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import useWindowSize from '../../Hook/useWindowSize';
import ButaAboutUsImage from '../../asset/image/Buta_AboutUs.jpeg';
import JapanMapImage from '../../asset/image/Japan_Map.png';
import LaCocinaIcon from '../../asset/icon/LaCocina.png';
import TruckAboutUsImage from '../../asset/image/Truck_AboutUs.jpg';
import TruckAboutUsMobileImage from '../../asset/image/Truck_iPhone.jpg';
import ErikaImage from '../../asset/image/Erika_Web_Hori.jpg';
import ErikaMobileImage from '../../asset/image/Erika_Web_Square_iPhone.jpg';
import ErikaIpageImage from '../../asset/image/Erika_Web_Ver_iPad_Vert.jpg';
import MusubiIcon from '../../asset/icon/Musubi_icon_Small.png';
import FlagIcons from '../../asset/icon/flags.png';
import TokachiKanjiIcon from '../../asset/icon/Tokachi_Kanji.png';
import styles from './about-us-section.module.scss';
import BREAKPOINTS from '../../Styling/breakpoints';

export const AboutUsSection = (props) => {
  const { sectionRef } = props;
  const { width, height } = useWindowSize();

  return (
    <div className={styles.root} ref={sectionRef}>
      <SectionTitle title="ABOUT US" />
      <div className={styles.riceBallExplanation}>
        { width < BREAKPOINTS.MD &&
        <>
          <div className={styles.titles}>
            <div>JAPANESE RICE BALL</div>
            <div>STICKY, CRUNCHY,</div>
            <div>AND NICE!</div>
          </div>
          <div className={styles.main}>
            <p className={styles.description}>We offer indulgent and delicious rice balls 
              inspired by Hokkaido style cuisine. We hope you enjoy our musubi that will 
              satisfy both your stomach and your soul!</p>
            <img src={ButaAboutUsImage} alt="Musubi Image"
              className={styles.musubiImage}
              style={{ marginRight: `calc(25px - ${width * 0.05}px)` }}
            />
          </div>
        </>
        }
        { width >= BREAKPOINTS.MD &&
          <>
            <div className={styles.left}>
              <div className={styles.titles}>
                <div>JAPANESE RICE BALL</div>
                <div>STICKY, CRUNCHY,</div>
                <div>AND NICE!</div>
              </div>
              <p className={styles.description}>We offer indulgent and delicious rice balls 
              inspired by Hokkaido style cuisine. We hope you enjoy our musubi that will 
              satisfy both your stomach and your soul!</p>
            </div>
            <img src={ButaAboutUsImage} alt="Musubi Image"
              className={styles.musubiImage}/>
          </>
        }
      </div>
      { width < BREAKPOINTS.MD &&
        <>
          <div className={styles.musubiDescription}>
            <div className={styles.title}>WHAT IS “MUSUBI” ?</div>
            <p className={styles.description}>The meaning of MUSUBI is rice-ball, and also 
          “connection” in Japanese. We love to connect people and communities through 
          our delicious food!</p>
          </div>
          <div className={styles.connector}>
            <div className={styles.left}>
              <div className={styles.title}>WE ARE A CONNECTOR</div>
              <p className={styles.description}>We are a connector between our home town of 
              Tokachi Japan and our adoptive home the Bay Area. We aim to bring MUSUBI “rice-ball”
              to the Bay and with it integrate a multitude cultures, perspectives 
              and personality to our humble and traditional food.</p>
            </div>
            <div className={styles.right}>
              <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                  <img src={MusubiIcon} alt="Musubi Icon"
                    className={styles.musubiIcon}/>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                  <img src={FlagIcons} alt="Flag Icons"
                    className={styles.flagIcons}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tokachiDescription}>
            <div className={styles.left} style={{ backgroundImage: `url(${JapanMapImage})`}}>
              <div className={styles.title}>
                <p className={styles.line1}>WHERE</p>
                <p className={styles.line2}>IS TOKACHI?</p>
              </div>
              <div className={styles.imageContainer}>
                <img src={TokachiKanjiIcon} alt="Kanji Icon"
                  className={styles.kanjiIcon}/>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.title}>WHAT IS TOKACHI?</div>
              <p className={styles.description}>Tokachi is a region in Japan known as a treasure 
              trove of food where is  a very prosperous agricultural and dairy region, 
              producing crops, dairy products, and meat.</p>
            </div>
          </div>
        </>
      }
      { width >= BREAKPOINTS.MD &&
        <div className={styles.descriptionsContainer}>
          <div className={styles.title}>WHAT IS “MUSUBI” ?</div>
          <div className={styles.explanations}>
            <div className={styles.left}>
              <p className={styles.description}>The meaning of MUSUBI is rice-ball, and also 
                “connection” in Japanese. We love to connect people and communities through 
                our delicious food!</p>
              <div className={styles.connectorWrapper}>
                <div className={styles.title}>WE ARE A CONNECTOR</div>
                <p className={styles.description}>We are a connector between our home town of 
                Tokachi Japan and our adoptive home the Bay Area. We aim to bring MUSUBI “rice-ball”
                to the Bay and with it integrate a multitude cultures, perspectives 
                and personality to our humble and traditional food.</p>
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.imagesContainer}>
                <div className={styles.icons}>
                  <div className={styles.wrapper}>
                    <div className={styles.imageContainer}>
                      <img src={MusubiIcon} alt="Musubi Icon"
                        className={styles.musubiIcon}/>
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.imageContainer}>
                      <img src={FlagIcons} alt="Flag Icons"
                        className={styles.flagIcons}/>
                    </div>
                  </div>
                </div>
                <div className={styles.tokachiImage} 
                  style={{ backgroundImage: `url(${JapanMapImage})`}}>
                  <div className={styles.title}>
                    <p className={styles.line1}>WHERE</p>
                    <p className={styles.line2}>IS TOKACHI?</p>
                  </div>
                  <div className={styles.imageContainer}>
                    <img src={TokachiKanjiIcon} alt="Kanji Icon"
                      className={styles.kanjiIcon}/>
                  </div>
                </div>
              </div>
              <div className={styles.tokachiDescription}>
                <div className={styles.title}>WHAT IS TOKACHI?</div>
                <p className={styles.description}>
                  Tokachi is a region in Japan known as a treasure 
                  trove of food where is  a very prosperous agricultural and dairy region, 
                  producing crops, dairy products, and meat.
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.laCocinaDescription}>
                <div className={styles.imageContainer}>
                  <img src={LaCocinaIcon} alt="LaCocina Icon"
                    className={styles.laCocinaIcon}/>
                </div>
                <div className={styles.descriptionWrapper}>
                  <p className={styles.description}>
                    In 2022, we joined the La Cocina incubator program to start 
                    a food truck business. We share their spirit of helping minorities 
                    start businesses and are proud of being a La Cocina member. 
                    Please visit for more details of La Cocina,  
                    &nbsp;<a href="https://lacocinasf.org/">https://lacocinasf.org/</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        width < BREAKPOINTS.MD &&
        <div className={styles.laCocinaDescription}>
          <div className={styles.left}>
            <div className={styles.imageContainer}>
              <img src={LaCocinaIcon} alt="LaCocina Icon"
                className={styles.laCocinaIcon}/>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.description}>
            In 2022, we joined the La Cocina incubator program to start a food truck business. 
            We share their spirit of helping minorities start businesses 
            and are proud of being a La Cocina member. 
            Please visit for more details of La Cocina,  
            &nbsp;<a href="https://lacocinasf.org/" style={{ color: '#965d96' }}>
              https://lacocinasf.org/</a>
            </p>
          </div>
        </div>
      }
      <div className={styles.truckDescription}>
        <img src={width < BREAKPOINTS.MD ? TruckAboutUsMobileImage 
          : TruckAboutUsImage} alt="Truck Image"
        className={styles.truckImage}/>
      </div>
      { width < BREAKPOINTS.MD &&
        <>
          <div className={styles.missionDescription}>
            <div className={styles.title}>OUR STORY</div>
            <p className={styles.description1}>Erika was born in Tokachi, Japan, 
            where she grew up eating omusubi 
            (rice- balls) made by her mother. In 2013, Erika moved to the US with 
            her daughter despite not speaking any English. Luckily, she quickly 
            found a welcoming community in San Francisco. Now, Erika hopes to give 
            back with TOKACHI MUSUBI by creating a space that celebrates the food 
            of her childhood, honoring the traditions that her mother passed down, 
            while also paying tribute to her new home, San Francisco and Bay Area.</p>
            <p className={styles.description2}>Enjoy our Japanese musubi ! 
            Let&apos;s Omusubi (connect!)</p>
          </div>
          <div className={styles.founderIntroduction}>
            <div className={styles.description}>
              <p className={styles.title}>Founder CEO & Chief Connector</p>
              <p className={styles.name}>Erika Yokoyama Sanchez</p>
            </div>
            <div className={styles.imageContainer}>
              <img src={ErikaMobileImage} alt="Erika Image"
                className={styles.image}/>
            </div>
          </div>
        </>

      } 

      { width >= BREAKPOINTS.MD &&
        <div className={styles.missionDescription}>
          <div className={styles.left}>
            <div className={styles.title}>OUR STORY</div>
            <p className={styles.description}>Erika was born in Tokachi, Japan, 
              where she grew up eating omusubi 
              (rice- balls) made by her mother. In 2013, Erika moved to the US with 
              her daughter despite not speaking any English. Luckily, she quickly 
              found a welcoming community in San Francisco. Now, Erika hopes to give 
              back with TOKACHI MUSUBI by creating a space that celebrates the food 
              of her childhood, honoring the traditions that her mother passed down, 
              while also paying tribute to her new home, San Francisco and Bay Area.</p>
            <p className={styles.description}>Enjoy our Japanese musubi ! 
              Let&apos;s Omusubi (connect!)</p>

            <div className={styles.introduction}>
              <p className={styles.description}>Founder CEO & Chief Connector</p>
              <p className={styles.description}>Erika Yokoyama Sanchez</p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={width < BREAKPOINTS.MD ? ErikaImage : ErikaIpageImage} alt="Erika Image"
              className={styles.image}/>
          </div>
        </div>
      }
    </div>
  );
};

AboutUsSection.propTypes = {
  sectionRef: PropTypes.object
};

export default AboutUsSection;