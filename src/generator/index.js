import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as Google from '../utils/Google';

if (Google.checkForGenerator(document)) {
  ReactDOM.render(<App />, Google.getGeneratorContainer());
};
