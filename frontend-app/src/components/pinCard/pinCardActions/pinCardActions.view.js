import React from 'react';
import PropTypes from 'prop-types';
import styles from './pinCardActions.module.css';

const PinCardActionsView = ({}) => {
  return (
    <div className={styles.__container}>
      <div className={styles.__message}>I appear on hover</div>
    </div>
  );
}

PinCardActionsView.propTypes = {};

export default PinCardActionsView;