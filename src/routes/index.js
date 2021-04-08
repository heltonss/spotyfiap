import React from "react";
import Browse from "pages/browse";
import About from "pages/about";
import { Switch, Route } from "react-router-dom";
import Playlist from "pages/playlist";
import Login from "pages/login";
import Register from "pages/register";
import PrivateRoute from "components/PrivateRoute";
import HandlePlaylist from "pages/HandlePlaylist";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/cadastro" component={Register} />
    <PrivateRoute path="/about" Component={About} />
    <PrivateRoute path="/home" Component={Browse} />
    <PrivateRoute path="/playlist/:id" Component={Playlist} />
    <PrivateRoute path="/handle-playlist/:id?" Component={HandlePlaylist} />
  </Switch>
);

export default Routes;
