import React from "react";
import { FormSide, FormWrapper } from "../../components";
import { ResponsiveImage, Title } from "../../shared";
import { FormLayoutContainer, ImgSide } from "./styles";

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
          <ResponsiveImage effect="blur" alt={"img"} src={"https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1592483351/form_tjje0g.png"} />
        </ImgSide>
      </FormLayoutContainer>
  
  );
};
