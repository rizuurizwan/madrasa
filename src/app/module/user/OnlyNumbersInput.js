import React from 'react';

const OnlyNumbersInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
    onChange(inputValue); // Pass the sanitized value to the parent component
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default OnlyNumbersInput;
