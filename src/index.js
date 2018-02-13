// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const appRoot = document.getElementById('root');

if (!appRoot) {
  throw new Error('Cannot find container with id #root!');
}

ReactDOM.render(<App />, appRoot);
