import React from 'react';
import './button.module.css';

const Button = ({ type, handleClick, text }) => {

  if (!handleClick) {
    handleClick = () => console.log('i love bankies')
  }

  return (
    <button
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
