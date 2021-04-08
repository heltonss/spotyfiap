import User from "models/user";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => {
  const isAuth = User.getUser !== null;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
