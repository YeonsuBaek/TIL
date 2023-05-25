import React from 'react';
import styles from './Overlay.module.css';

const Overlay = (props) => {
  return (
    <div id='overlay' className={styles.overlay} onClick={props.onClose}></div>
  );
};

export default Overlay;
