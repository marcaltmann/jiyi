import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Hanzi from './hanzi';

const App = () => (
  <div>
    <Route exact path="/" render={() => (
      <Redirect to="/1"/>
    )}/>
    <Route path="/:id" component={Hanzi} />
  </div>
);

export default App;
