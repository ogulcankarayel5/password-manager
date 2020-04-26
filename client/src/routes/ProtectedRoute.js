import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/unauthorized" />
        )
      }
    />
  );
};
