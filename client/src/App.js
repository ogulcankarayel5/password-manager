import React from "react";
import { Router } from "react-router-dom";
import { MainRouter } from "./routes";
import { Theme } from "./shared";
import { GlobalStyle,store,history,setAuthToken} from "./utils";
import { Provider } from "react-redux";





function App() {
  
  
  return (
    <Provider store={store}>
      <Router history={history}>
        <Theme>
          <GlobalStyle />
          <MainRouter />
        </Theme>
      </Router>
    </Provider>
  );
}

export default App;
