import React from "react";
import styled from "styled-components";
import { ResponsiveImage,Container } from "../";
const FormLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`;

const ImgSide = styled.div`
  grid-column: 2/3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLayout = ({ children, img }) => {
  return (
    <FormLayoutContainer>
      {children}
      <ImgSide>
        <ResponsiveImage src={img} />
      </ImgSide>
    </FormLayoutContainer>
  );
};
