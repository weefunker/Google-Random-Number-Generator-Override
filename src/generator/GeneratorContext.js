import React, {useState, createContext} from 'react';

import * as Storage from '../utils/Storage';

const GeneratorContext = createContext();

const GeneratorProvider = (props) => {
  const [limits, setLimits] = useState({min: 1, max: 10});

  const random = () => Math.floor(Math.random() * limits.max + limits.min);

  const [value, setValue] = useState(random());
  const [oldValue, setOldValue] = useState(value);

  const fallbackToRandowm = (result) => {
    if (!result) setValue(random());
    else setValue(result.value);
  }

  const generator = (shouldFetchTarget) => {
    setOldValue(value);

    if (shouldFetchTarget) Storage.pop(fallbackToRandowm);
    else setValue(random());
  }

  return (
    <GeneratorContext.Provider value={{limits, setLimits, generator, value, oldValue}}>
      {props.children}
    </GeneratorContext.Provider>
  )
}

export { GeneratorProvider, GeneratorContext };