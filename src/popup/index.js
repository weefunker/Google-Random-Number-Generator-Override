import 'file-loader?name=[name].[ext]!./public/index.html';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
