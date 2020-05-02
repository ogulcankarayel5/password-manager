import React from "react";
import styled from "styled-components";
import {Header,Footer} from "../";
import img from '../../assets/images/bg1.png';

const CommonLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  background-image:url(${img});
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-position:center;
  background-size:cover;
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


