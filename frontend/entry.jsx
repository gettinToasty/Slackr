import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = window.store = configureStore();
  ReactDOM.render(
    <h1>React Works</h1>,
    document.getElementById('root')
  );
});
