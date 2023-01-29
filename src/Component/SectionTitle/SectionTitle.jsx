import React from 'react';
import PropTypes from 'prop-types';
import styles from './section-title.module.scss';

const SectionTitle = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.arrowRight}>
        <div className={styles.line} />
        <div className={styles.point} />
      </div>
      <div className={styles.sectionTitle}>{props.title}</div>
      <div className={styles.arrowLeft}>
        <div className={styles.point} />
        <div className={styles.line} />
      </div>     
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;