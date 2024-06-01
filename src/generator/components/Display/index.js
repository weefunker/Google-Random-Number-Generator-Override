import React, { useContext } from 'react';

import { Counter } from './styles';

import { GeneratorContext } from '../../GeneratorContext';

const Display = () => {
  const { value, oldValue } = useContext(GeneratorContext);

  return (
    <Counter
      duration={0.6}
      start={oldValue}
      end={value}
    />
  )
}

export default Display;