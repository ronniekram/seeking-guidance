import React from 'react';
import styles from './input.module.css';

const Input = ({ id, name, type, value, handleChange }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      className={styles.input} 
    />
  );
}

export default Input;
