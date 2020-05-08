import React from "react";

import { FormWrapper, FormSide } from "./styles";
import { Title } from "../utils";


import { ThemeConsumer } from "styled-components";





export const FormHoc = WrappedComponent => {
  return props => {
       
    return (
      <FormSide>
      <FormWrapper>
       
          <Title>Welcome</Title>
          <ThemeConsumer>
            {(theme) => (
              <WrappedComponent theme={theme} {...props} />
            )}
          </ThemeConsumer>
         
       
      </FormWrapper>
    </FormSide>
    )
  }
}