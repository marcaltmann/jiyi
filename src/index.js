/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configure-store';
import Root from './components/root';
import { shuffleOrder } from 'actions/order';

const store = configureStore();
store.dispatch(shuffleOrder());

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode');
  console.log(`App version: ${__VERSION__}`);
}
