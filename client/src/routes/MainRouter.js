import React, { Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import lazy from "./lazy";
import BounceLoader from "react-spinners/BounceLoader";
import { CenterComponent } from "../components/startup/style";
import posed, { PoseGroup } from "react-pose";
import img from "../assets/images/form.png";
const AppRoute = lazy(() => import("./"), "AppRoute");
const FormLayout = lazy(() => import("../components"), "FormLayout");
const StartupSplash = lazy(() => import("../components"), "StartupSplash");
const CommonLayout = lazy(() => import("../components"), "CommonLayout");
const Unauthorized = lazy(() => import("../pages"), "Unauthorized");
const NotFound = lazy(() => import("../pages"), "NotFound");
const HomePage = lazy(() => import("../pages"), "HomePage");
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 150, beforeChildren: true },
  exit: { opacity: 0 },
});

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
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <StartupSplash>
            <Switch location={location}>
              <AppRoute
                exact
                path="/"
                component={HomePage}
                layout={CommonLayout}
              />
              <Route path="/unauthorized" component={Unauthorized} />

              <AppRoute
                img={img}
                path="/login"
                component={Login}
                layout={FormLayout}
              />

              <AppRoute
                img={img}
                path="/register"
                component={Register}
                layout={FormLayout}
              />

              <Route path="*" component={NotFound} />
            </Switch>
          </StartupSplash>
        </RouteContainer>
      </PoseGroup>
    </Suspense>
  );
};
