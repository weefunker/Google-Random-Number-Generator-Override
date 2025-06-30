import React, {useState, createContext} from 'react';

import * as Storage from '../utils/Storage';

const GeneratorContext = createContext();

const GeneratorProvider = (props) => {
  const { originalElements } = props;
  const [limits, setLimits] = useState({min: 1, max: 10});

  const random = () => Math.floor(Math.random() * (limits.max - limits.min + 1)) + limits.min;

  const [value, setValue] = useState(random());
  const [oldValue, setOldValue] = useState(value);

  const fallbackToRandowm = (result) => {
    if (!result) setValue(random());
    else setValue(parseInt(result.value));
  }

  const generator = (shouldFetchTarget) => {
    setOldValue(value);

    if (shouldFetchTarget) {
      console.log('Using target number from queue...');
      Storage.pop(fallbackToRandowm);
    } else {
      console.log('Generating random number...');
      setValue(random());
    }
  }

  // Get Google styles from window or props
  const googleStyles = window.googleRNGStyles || {};

  return (
    <GeneratorContext.Provider value={{
      limits, 
      setLimits, 
      generator, 
      value, 
      oldValue, 
      originalElements,
      googleStyles
    }}>
      {props.children}
    </GeneratorContext.Provider>
  )
}

export { GeneratorProvider, GeneratorContext };