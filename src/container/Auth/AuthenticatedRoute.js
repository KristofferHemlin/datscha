import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./Auth";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isAuthenticated()) {
        return <Component {...props} />;
      } else {
        if (localStorage.getItem("token") != null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          );
        }
      }
    }}
  />
);

export default AuthenticatedRoute;
