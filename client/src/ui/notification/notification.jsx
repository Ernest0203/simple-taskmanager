import React from 'react';

import styles from './styles.module.scss';

const Notification = (props) => {
    const { text, isOpen, type } = props;

    const style = {};
    if (type === 'error') style.background = '#ff9577';
    if (type === 'confirm') style.background = '#6dd076';

    let content = isOpen
      ? (<div className={styles.notifContainer} style={style}>
          <div className={styles.notifText}>{text}</div>
        </div>)
      : ''

    return (
      <div>{content}</div>
    );
}

export default Notification;