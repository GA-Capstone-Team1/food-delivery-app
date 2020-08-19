import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

let ProtectedRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (authenticated) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/signup", state: { from: props.location } }}
              />
            );
          }
        }}
      />
    </>
  );
};

export default ProtectedRoute;
