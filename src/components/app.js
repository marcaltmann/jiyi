import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Hanzi from './hanzi';

const App = () => (
  <Switch>
    <Route exact path="/" render={() => (
      <Redirect to="/1"/>
    )}/>
    <Route path="/:id" component={Hanzi} />
  </Switch>
);

export default App;
