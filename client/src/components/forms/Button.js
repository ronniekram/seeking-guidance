import React from 'react';

const Button = ({ type, handleClick, text }) => {
  if (!handleClick) {
    handleClick = () => console.log('i love bankies')
  }
  return (
    <button>

    </button>
  );
}

export default Button;
