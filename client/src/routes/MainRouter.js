import React, { Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import lazy from "./lazy";
import BounceLoader from "react-spinners/BounceLoader";
import { CenterComponent } from "../components/startup/style";

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
        <AppRoute exact path="/" component={HomePage} layout={CommonLayout} />
        <Route path="/unauthorized" component={Unauthorized} />
      
         
        <Route exact path={["/login","/register"]}>
          <StartupSplash>
            <Switch>
              <AppRoute path="/login" component={Login} layout={FormLayout}/>
              <AppRoute path="/register" component={Register} layout={FormLayout}/>
              <Route path="*" component={NotFound} />
            </Switch>
          </StartupSplash>
        </Route>
           
       
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};
