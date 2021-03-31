import React from "react";
import Browse from "pages/browse";
import About from "pages/about";
import { Switch, Route } from "react-router-dom";
import Playlist from "pages/playlist";
import Login from "pages/login";
import Register from "pages/register";
import PrivateRoute from "components/PrivateRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/cadastro" component={Register} />
    {/* <PrivateRoute path="/home">
      <Browse />
    </PrivateRoute>
    <PrivateRoute path="/playlist/:id">
      <Playlist />
    </PrivateRoute> */}
    <Route path="/about" component={About} />
    <PrivateRoute path="/home" component={Browse} />
    <PrivateRoute path="/playlist/:id" component={Playlist} />
  </Switch>
);

export default Routes;
