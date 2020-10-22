import React from "react";

import {Header,Footer} from "../";
import {CommonLayoutContainer} from './styles'



export const CommonLayout = ({ children }) => {
  return (
    <CommonLayoutContainer>
      <Header />

      {children}

      <Footer />
    </CommonLayoutContainer>
  );
};


