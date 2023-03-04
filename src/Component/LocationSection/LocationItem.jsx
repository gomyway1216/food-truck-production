import React from 'react';
import PropTypes from 'prop-types';
import * as dateUtil from '../../Util/dateUtil';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './location-item.module.scss';
import Link from '@mui/material/Link';

const LocationItem = (props) => {
  const { title, start, end, location, mapUrl } = props.schedule;
  const date = new Date(start);
  const dayOfWeek = dateUtil.getDayOfWeek(date);
  const formattedDate = dateUtil.getFormattedDate(date);
  const startTime = dateUtil.getFormattedTime(start);
  const endTime = dateUtil.getFormattedTime(end);

  return (
    <div className={styles.root}>
      <div className={styles.date}>
        <div className={styles.dayOfWeek}>{dayOfWeek}</div>
        <div className={styles.monthAndDate}>{formattedDate}</div>
      </div>
      <div className={styles.title}>
        {title.toUpperCase()}
      </div>
      <div className={styles.details}>
        <div className={styles.time}>{startTime} - {endTime}</div>
        <div className={styles.location}>
          <LocationOnIcon fontSize="x-small" className={styles.locationIcon}/>
          <Link
            underline="none" 
            color="inherit"
            href={mapUrl}>{location.toUpperCase()}</Link>
        </div>
      </div>
    </div>
  );
};

LocationItem.propTypes = {
  schedule: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    start: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired,
    mapUrl: PropTypes.string.isRequired
  })
};

export default LocationItem;