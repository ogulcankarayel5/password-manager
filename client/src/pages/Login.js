import React,{useEffect} from "react";

import { Form } from "../components/form";
import { SEO } from "../components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { authActions } from "..//store/actions";

import { useForm } from "../hooks";

import { validate,history } from "../utils";

import { withTheme } from "styled-components";

const Login = (props) => {
  const dispatch = useDispatch();
  const { user, serverErrors,isAuthenticated } = useSelector(
    (state) => ({
      user: state.authReducer.user,
      serverErrors: state.errorReducer.errors,
      isAuthenticated:state.authReducer.isAuthenticated
    }),
    shallowEqual
  );


  const initialState = {
    username: "",
    password: "",
  };
  const { theme } = props;

  const submit = () => {
    console.log("hyyysbumt");
  };

  const onClickGoogle = (res) => {
    console.log(res);
    dispatch(authActions.loginWithGoogle(res.accessToken));
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,

    handleReCAPTCHA,
  } = useForm(initialState, validate, submit, "login");

  
  console.log("login");
  console.log(user);
  

  //userform kaldırıldı
  return (
    <>
      <SEO title="Login" description="Login Page" />
      <Form
        submit={submit}
        theme={theme}
        loginForm
        serverErrors={serverErrors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleReCAPTCHA={handleReCAPTCHA}
        onClickGoogle={onClickGoogle}
        errors={errors}
      />
    </>
  );
};

export default withTheme(Login);
