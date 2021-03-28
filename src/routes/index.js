import React from 'react';
import Browse from 'pages/browse';
import { Switch, Route } from 'react-router-dom';
import Playlist from 'pages/playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlist/:id" component={Playlist} />
  </Switch>
);

export default Routes;
