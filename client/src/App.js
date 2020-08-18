import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { MainRouter } from "./routes";
import { Theme } from "./shared";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle, store } from "./utils";
import { isTokenExpired, setAuthToken, getTokens, history } from "./utils";
import { useSelector, useDispatch } from "react-redux";
import { accountService } from "./services/account.service";
import { authActions, errorActions } from "./store/actions";
import { userService } from "./services";
import useAuth from "./hooks/useAuth";
function App() {
  const {} = useAuth();

  const { loading } = useSelector((state) => ({
    loading: state.authReducer.loading,
  }));

 

  return loading ? (
    <div>heyy</div>
  ) : (
    <HelmetProvider>
      <Router history={history}>
        <Theme>
          <GlobalStyle />
          <MainRouter />
        </Theme>
      </Router>
    </HelmetProvider>
  );
}

export default App;
