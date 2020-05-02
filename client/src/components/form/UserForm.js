import React from "react";

import { Submit, SocialButton, FormWrapper, FormSide } from "./styles";
import { Title, Text } from "../utils";
import { Link } from "react-router-dom";

import { ThemeConsumer } from "styled-components";
import { ReactComponent as GoogleSvg } from "../../assets/icons/google.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/icons/linkedin.svg";

const SocialButtons = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <Submit>Login</Submit>
          <Text marginTop={"3.5rem"}>Or</Text>
          <SocialButton
            backgroundColor={theme.colors.background}
            color={theme.colors.formSocialPrimaryColor}
            borderColor={theme.colors.formSocialPrimaryColor}
          >
            <GoogleSvg />
            <span>Login with Google</span>
          </SocialButton>

          <SocialButton
            backgroundColor={theme.colors.background}
            color={theme.colors.formSocialSecondaryColor}
            borderColor={theme.colors.formSocialSecondaryColor}
          >
            <LinkedinSvg />
            <span>Login with Linkedin</span>
          </SocialButton>
          <Text marginTop={"2rem"} textStart>
            Don't have account yet ?<Link to="/register"> Click here</Link>
          </Text>
        </>
      )}
    </ThemeConsumer>
  );
};

export const UserForm = ({ children, type }) => {
  console.log(type);
  return (
    <FormSide>
      <FormWrapper>
        <form>
          <Title>Welcome</Title>
          {children}
          {type === "login" ? SocialButtons() :<Submit>Register</Submit>}
        </form>
      </FormWrapper>
    </FormSide>
  );
};
