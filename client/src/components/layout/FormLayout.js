import React from "react";

import { FormLayoutContainer, ImgSide } from "./styles";
import { ResponsiveImage } from "../../shared";
import { FormWrapper, FormSide } from "../../components";
import { Title } from "../../shared";
export const FormLayout = ({ children, img }) => {


  return (
    
    
        <FormLayoutContainer >
        <FormSide>
          <FormWrapper>
            <Title>Welcome</Title>

            {children}
          </FormWrapper>
        </FormSide>

        <ImgSide>
          <ResponsiveImage effect="blur" alt={"img"} src={img} />
        </ImgSide>
      </FormLayoutContainer>
  
  );
};
