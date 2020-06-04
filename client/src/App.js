import React from "react";
import { Router } from "react-router-dom";
import { MainRouter } from "./routes";
import { Theme } from "./shared";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle, store, history, setAuthToken } from "./utils";
import { Provider } from "react-redux";

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Router history={history}>
          <Theme>
            <GlobalStyle />
            <MainRouter />
          </Theme>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
