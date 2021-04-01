import React from "react";
import Browse from "pages/browse";
import { Route, Switch } from "react-router-dom";
import Playlist from "pages/playlist";
import Login from "pages/login";
import Register from "pages/register";
import PrivateRoute from "components/PrivateRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/cadastro" component={Register} />
    <PrivateRoute path="/home">
      <Browse />
    </PrivateRoute>
    <PrivateRoute path="/playlist/:id">
      <Playlist />
    </PrivateRoute>
  </Switch>
);

export default Routes;
