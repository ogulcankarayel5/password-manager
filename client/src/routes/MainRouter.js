import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedRouteDiv } from "../shared";
import { AppRoute, ProtectedRoute } from "./";
import { CommonLayout, FormLayout, StartupSplash } from "../components";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { HomePage, NotFound, Unauthorized } from "../pages";
import posed, { PoseGroup } from "react-pose";
import img from "../assets/images/form.png";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 150, beforeChildren: true },
  exit: { opacity: 0 },
});

export const MainRouter = () => {
  const location = useLocation();

  return (
    <PoseGroup>
      <RouteContainer key={location.pathname}>
        <Switch location={location}>
          <AppRoute exact path="/" component={HomePage} layout={CommonLayout} />
          <Route path="/unauthorized" component={Unauthorized} />

          <AppRoute
            img={img}
            path="/login"
            component={Login}
            layout={FormLayout}
          />

          <StartupSplash>
            <AppRoute
              img={img}
              path="/register"
              component={Register}
              layout={FormLayout}
            />
          </StartupSplash>

          <Route path="*" component={NotFound} />
        </Switch>
      </RouteContainer>
    </PoseGroup>
  );
};
