import React from "react";
import Browse from "pages/browse";
import About from "pages/about";
import { Switch, Route } from "react-router-dom";
import Playlist from "pages/playlist";
import Login from "pages/login";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/home" component={Browse} />
    <Route path="/playlist/:id" component={Playlist} />
  </Switch>
);

export default Routes;
