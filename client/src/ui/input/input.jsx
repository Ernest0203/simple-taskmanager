import React from 'react';
import styles from './styles.module.scss';

const Input = (props) => {
  const { name, value, type, placeholder, onChange } = props;
  
  return (
    <div>
      <input className={styles.input} name={name} value={value} type={type} placeholder={placeholder} onChange={(e) => onChange(e)}></input>
    </div>
  );
}

export default Input;