import React from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Form } from "../components/form/Form";
import { authActions, errorActions } from "../actions";
import { useForm } from "../hooks";
import { validate } from "../utils";
import { SEO } from "../components";
import ClipLoader from "react-spinners/ClipLoader";
import { withTheme } from "styled-components";

const Register = (props) => {
  const dispatch = useDispatch();

  const { serverErrors, loading } = useSelector(
    (state) => ({
      serverErrors: state.errorReducer.errors,
      loading: state.authReducer.loading,
    }),
    shallowEqual
  );

  const initialState = {
    email: "",
    username: "",
    password: "",
  };

  const { theme } = props;

  const submit = () => {
    const { username, password, email } = values;
    const user = {
      name: username,
      password,
      email,
    };
    dispatch(errorActions.clearErrors());
    dispatch(authActions.register(user));
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
   
    handleReCAPTCHA,
  } = useForm(initialState, validate, submit, "register");

  console.log("register");
  console.log(serverErrors);
  return (
    <>
      <SEO title="Register" description="Register Page" />
      <Form
        submit={submit}
        theme={theme}
        registerForm
        serverErrors={serverErrors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleReCAPTCHA={handleReCAPTCHA}
        errors={errors}
      />
    </>
  );
};

export default withTheme(Register);
