import React from "react";
import { Router } from "react-router-dom";
import { MainRouter } from "./routes";
import { Theme } from "./shared";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle } from "./utils";
import { history } from "./utils";
import { useSelector} from "react-redux";
import {Auth} from "./components"


function App() {
  const { loading } = useSelector((state) => ({
    loading: state.authReducer.loading,
  }));

  if (loading) {
    return <Auth />;
  }

  return (
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
