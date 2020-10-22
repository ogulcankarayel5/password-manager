import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const {isAuthenticated,refreshToken} = useSelector(state => ({
    isAuthenticated:state.authReducer.isAuthenticated,
    refreshToken:state.authReducer.refresh_token
  }) 
  );
  return (
    <Route
      {...rest}
      render={(props) =>
        (isAuthenticated === true || (isAuthenticated===false && refreshToken)) ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{
            pathname:"/login",
            state:{from:props.location}
          }} />
        )
      }
    />
  );
};
