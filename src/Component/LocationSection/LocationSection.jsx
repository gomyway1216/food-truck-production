import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from './LocationItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './location-section.module.scss';

const LocationSection = (props) => {
  const { scheduleList, sectionRef } = props;
  return (
    <div className={styles.root} ref={sectionRef}>
      <SectionTitle title="LOCATION" />
      <div className={styles.locations}>
        {scheduleList.map((schedule) =>
          <LocationItem key={schedule.id} schedule={schedule} />
        )}
      </div>
    </div>
  );
};

LocationSection.propTypes = {
  scheduleList: PropTypes.array.isRequired,
  sectionRef: PropTypes.object
};

export default LocationSection;