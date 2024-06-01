import React, { useState } from 'react';

import {
  Container,
  Label,
  Field
} from './styles';

const Input = ({ name, type, defaultValue, placeholder, updater }) => {
  const [value, setValue] = useState(defaultValue);

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
    updater(inputValue);
  }

  return (
    <Container>
      <Label>{name}</Label>
      <Field
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  )
}

export default Input;

