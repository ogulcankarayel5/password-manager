import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from './routes/MainRouter';
import Theme from "./components/utils/Theme";
import { GlobalStyle } from "./utils/globalStyle";


function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <MainRouter/>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
