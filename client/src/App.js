import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./routes";
import { Theme } from "./components";
import { GlobalStyle,store } from "./utils";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Theme>
          <GlobalStyle />
          <MainRouter />
        </Theme>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
