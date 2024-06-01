import React from 'react';

import Display from './components/Display';
import Limits from './components/Limits';
import Button from './components/Button';

import { Container, DisplayContainer } from './App.styles';

import { GeneratorProvider } from './GeneratorContext';

const App = () => {
  return (
    <Container>
      <GeneratorProvider>
        <DisplayContainer>
          <Display />
          <Limits />
        </DisplayContainer>

      <Button />
      </GeneratorProvider>
    </Container>
  )
}

export default App;