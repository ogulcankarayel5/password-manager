import React from "react";
import styled from "styled-components";
import {Header,Footer} from "../";


const CommonLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 90% 1fr;
  grid-template-rows: 1fr 4fr 1fr;
`;

export const CommonLayout = ({ children }) => {
  return (
    <CommonLayoutContainer>
      <Header />

      {children}

      <Footer />
    </CommonLayoutContainer>
  );
};


