import React, {useState, useEffect, createContext} from 'react';

import * as Storage from '../utils/Storage';

const TargetListContext = createContext();

const TargetListProvider = (props) => {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    Storage.get(setTargets);
    // setTargets([{id: '1', value: 4}, {id: '2', value: 8}, {id: '3', value: 15}, {id: '4', value: 16}, {id: '5', value: 23}, {id: '6', value: 42}]);
  }, []);

  useEffect(() => {
    Storage.set(targets);
  }, [targets])

  return (
    <TargetListContext.Provider value={[targets, setTargets]}>
      {props.children}
    </TargetListContext.Provider>
  )
}

export { TargetListProvider, TargetListContext };