import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
  }));
  console.log("isauth: ",isAuthenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
