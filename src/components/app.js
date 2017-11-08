import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import hanziList from '../data/hanzi-list';

const App = () => (
  <ul>
    {
      hanziList.map((hanzi, index) => (
        <li key={index}>
          {hanzi.t}
        </li>
      ))
    }
  </ul>
);

export default App;
