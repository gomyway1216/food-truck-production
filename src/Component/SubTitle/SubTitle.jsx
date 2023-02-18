import React from 'react';
import PropTypes from 'prop-types';
import styles from './sub-title.module.scss';

const SubTitle = (props) => {
  const { subTitle } = props;
  if(subTitle.includes(',')) {
    const subTitleList = subTitle.split(',');
    return (
      <>
        {subTitleList.map((value) =>
          <div className={styles.subTitle} key={value}>{value}</div>
        )}
      </>
    );
  } else {
    return <div>{subTitle}</div>;
  }
};

SubTitle.propTypes = {
  subTitle: PropTypes.string.isRequired
};

export default SubTitle;