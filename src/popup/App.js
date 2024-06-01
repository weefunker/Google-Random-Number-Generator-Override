import React from 'react';

import Form from './components/Form';
import List from './components/List';

import { TargetListProvider } from './TargetListContext';

import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <>
      <TargetListProvider>
        <Form />
        <List />
      </TargetListProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
