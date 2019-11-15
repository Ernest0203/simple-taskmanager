import React from 'react';
import styles from './styles.module.scss';

const Button = (props) => {
  const { text, onClick } = props;

  return (
    <div className={styles.button}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;