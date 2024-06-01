import React, { useContext } from 'react';

import { Container } from './styles';

import { GeneratorContext } from '../../GeneratorContext';

const Button = () => {
  const { generator } = useContext(GeneratorContext);

  const handleButtonClick = (event) => {
    const shiftDown = event.shiftKey;
    generator(shiftDown);
  }

  return (
    <Container onClick={handleButtonClick}>
      Generate
    </Container>
  )
}

export default Button;
