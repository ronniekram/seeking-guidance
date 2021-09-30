import React from 'react';

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
