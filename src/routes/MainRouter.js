import React, { Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import lazy from "./lazy";
import BounceLoader from "react-spinners/BounceLoader";
import { CenterComponent } from "../components/auth/style";

import img from "../assets/images/form.png";
const ProtectedRoute = lazy(() => import("./"), "ProtectedRoute");
const AppRoute = lazy(() => import("./"), "AppRoute");
const FormLayout = lazy(() => import("../components"), "FormLayout");
const StartupSplash = lazy(() => import("../components"), "StartupSplash");
const CommonLayout = lazy(() => import("../components"), "CommonLayout");
const Unauthorized = lazy(() => import("../pages"), "Unauthorized");
const NotFound = lazy(() => import("../pages"), "NotFound");
const HomePage = lazy(() => import("../pages"), "HomePage");
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));


export const MainRouter = () => {
  const location = useLocation();
 
  return (
    <Suspense
      fallback={
        <CenterComponent>
          <BounceLoader color={"#56DDC3"} />
        </CenterComponent>
      }
    >
      <Switch>
       
        <Route path="/unauthorized" component={Unauthorized} />
        <AppRoute path="/login" component={Login} layout={FormLayout} exact />
        {/* <Route exact path={["/login", "/register"]}>
          <Switch>
            <AppRoute path="/login" component={Login} layout={FormLayout} />
            <AppRoute
              path="/register"
              component={Register}
              layout={FormLayout}
            />
          </Switch>
        </Route> */}
        <Route
          path="/"
          render={({ match: { url } }) => (
          
             
             <AppRoute exact path={`${url}/`} component={HomePage} layout={CommonLayout} />
           
          
          
          )}
        />

        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};
