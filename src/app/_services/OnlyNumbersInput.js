import React from 'react';
import { Form } from 'react-bootstrap';

const IntegerInput = ({ value, onChange, onBlur, ...props }) => {
  const handleInputChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    onChange(input ? parseInt(input, 10) : ''); // Parse as integer or set to empty string if input is empty
  };

  return (
    <Form.Control
      {...props}
      type="text"
      value={value || ''}
      onChange={handleInputChange}
      onBlur={onBlur}
      pattern="^[0-9]*$"
    />
  );
};

export default IntegerInput;
