import React from 'react';

import Display from './components/Display';
import Limits from './components/Limits';
import Button from './components/Button';
import Carousel from './components/Carousel';

import { Container, DisplayContainer, RNGSection } from './App.styles';

import { GeneratorProvider } from './GeneratorContext';

const App = ({ originalElements }) => {
  const googleStyles = window.googleRNGStyles || {};
  
  return (
    <Container googleStyles={googleStyles}>
      <GeneratorProvider originalElements={originalElements}>
        <RNGSection>
          <DisplayContainer>
            <Display />
            <Limits />
          </DisplayContainer>
          <Button />
        </RNGSection>
        
        <Carousel />
      </GeneratorProvider>
    </Container>
  )
}

export default App;