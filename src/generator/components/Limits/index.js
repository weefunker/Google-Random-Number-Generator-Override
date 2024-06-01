import React, { useContext } from 'react';

import Input from '../Input';

import { Container } from './styles';

import { GeneratorContext } from '../../GeneratorContext';

export default function Limits() {
  const {limits, setLimits} = useContext(GeneratorContext);

  const setMin = (value) => {
    const { max } = limits;
    setLimits({ max, min: value });
  }

  const setMax = (value) => {
    const { min } = limits;
    setLimits({ min, max: value });
  }

  return (
    <Container>
      <Input
        name="min"
        type="number"
        defaultValue={limits.min}
        updater={setMin}
      />

      <Input
        name="max"
        type="number"
        defaultValue={limits.max}
        updater={setMax}
      />
    </Container>
  )
}
