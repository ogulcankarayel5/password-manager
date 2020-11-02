import React, { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Loading } from "../components";
import { AppRoute } from "./AppRoute";
import { AuthRoute } from "./AuthRoute";
import lazy from "./lazy";
import { ProtectedRoute } from "./ProtectedRoute";




const FormLayout = lazy(() => import("../components"), "FormLayout");

const CommonLayout = lazy(() => import("../components"), "CommonLayout");
const Unauthorized = lazy(() => import("../pages"), "Unauthorized");
const NotFound = lazy(() => import("../pages"), "NotFound");
const HomePage = lazy(() => import("../pages"), "HomePage");
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"))


export const MainRouter = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <Switch location={location}>
        <AppRoute exact path="/" component={HomePage} layout={CommonLayout} />
        <AppRoute path="/resetpassword" component={ResetPassword} layout={FormLayout}/>
        <AuthRoute path="/login" component={Login} layout={FormLayout} />
        <ProtectedRoute
          path="/register"
          component={Register}
          layout={FormLayout}
        />

        <Route path="/unauthorized" component={Unauthorized} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};
