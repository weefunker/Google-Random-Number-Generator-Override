import React, { useState, useContext, useRef } from 'react';

import {
  Container,
  Title,
  InputBox,
  Input,
  Button
} from './styles';

import { TargetListContext } from '../../TargetListContext';

const Form = () => {
  const [targetList, setTargetList] = useContext(TargetListContext);
  const [inputValue, setInputValue] = useState();

  const inputEl = useRef(null);

  const updateTarget = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  }

  const addTarget = (event) => {
    event.preventDefault();

    const newTarget = {id: Date.now().toString(), value: inputValue};
    
    setTargetList([...targetList, newTarget]);
    setInputValue('');

    inputEl.current.focus();
  }

  return (
    <Container onSubmit={addTarget}>
      <Title>Add Target Number</Title>

      <InputBox>
        <Input
          ref={inputEl}
          type="number"
          name="target"
          value={inputValue}
          placeholder="Goal Number"
          onChange={updateTarget}
        />

        <Button type="submit">
          Submit
        </Button>
      </InputBox>
    </Container>
  );
}

export default Form;
