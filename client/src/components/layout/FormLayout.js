import React from "react";

import {FormLayoutContainer,ImgSide} from './styles'
import { ResponsiveImage } from "../../shared";


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
