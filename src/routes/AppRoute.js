import React from "react";
import { Route } from "react-router-dom";

export const AppRoute = ({ component: Component, layout: Layout,img,...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) => (
        
        
     
          <Layout img={img}>
          <Component {...rest} {...props} />
        </Layout>
      
      )}
    />
  );
};


