import React from 'react';
import styles from './button.module.css';

const Button = ({ type, handleClick, text }) => {

  if (!handleClick) {
    handleClick = () => console.log('i love bankies')
  }

  return (
    <button
      className={styles.button}
      type={type}
      onClick={handleClick}
    >
      Ask
    </button>
  );
}

export default Button;
