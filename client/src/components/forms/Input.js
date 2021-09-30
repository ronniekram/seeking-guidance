import React from 'react';
import './input.module.css';

const Input = ({ id, name, type, value, handleChange }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={handleChange} 
    />
  );
}

export default Input;
