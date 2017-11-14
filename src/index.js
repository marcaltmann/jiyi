/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import configureStore from './store/configure-store';
import 'styles/index';  // Needs to be before imported before Root component
import Root from './components/root';

initReactFastclick();

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode');
  console.log(`App version: ${__VERSION__}`);
}
