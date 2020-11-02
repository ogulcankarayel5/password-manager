import React from "react";
import { GoogleLogin } from "react-google-login";
import { FaLock, FaUser } from "react-icons/fa";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Reaptcha from "reaptcha";
import { useTheme } from "styled-components";
import { ButtonComponent, ErrorText, FormInput, SEO } from "../components";
import { Form } from "../components/form";
import { useForm } from "../hooks";
import { Text } from "../shared";
import { authActions } from "../store/actions";
import { showToast, validate } from "../utils";



const Login = (props) => {
  const dispatch = useDispatch();
  const theme=useTheme()
  const { user } = useSelector(
    (state) => ({
      user: state.authReducer.user,
     
    }),
    shallowEqual
  );

  const initialState = {
    username: "",
    password: "",
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("hyyysbumt");
  };


  const onClickGoogle = (res) => {
    console.log(res);
    dispatch(authActions.loginWithGoogle(res.accessToken));
    showToast("success","login")
  
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

  
  return (
    <>
      <SEO title="Login" description="Login Page" />
    
      <Form submit={submit}>
        <div className="form-group form-group-error">
          <FormInput
            className={`${errors.username && "input-error"}`}
            name="username"
            type="text"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            ariaLabel="Username"
            icon={
              <FaUser size={"3rem"} color={theme.colors.formInputBorderColor} />
            }
          />
        </div>
        {errors.username && (
          <ErrorText>{errors.username}</ErrorText>
        )}

        <div className="form-group form-group-error">
          <FormInput
            name="password"
            type="password"
            ariaLabel="Password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            icon={
              <FaLock size={"3rem"} color={theme.colors.formInputBorderColor} />
            }
          />
        </div>
        {errors.password && (
          <ErrorText>{errors.password}</ErrorText>
        )}

        <div className="form-group form-group-start">
          <div className="formCheck">
            <input type="checkbox" />
            <Text>Remember me</Text>
          </div>
          <Link to="/forgotpassword">Forgot Password ?</Link>
        </div>

        <Reaptcha
          sitekey={process.env.REACT_APP_TEST_SITE_KEY}
          onVerify={props.handleReCAPTCHA}
        />
        <ButtonComponent type="submit" spanText="Login" />
        <Text marginTop={"2rem"}>Or</Text>
        <GoogleLogin
          clientId="1082138651796-2a67u657k8sn5d4qhbg0ni8q6e29rboc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onClickGoogle}
          onFailure={onClickGoogle}
        />
        <Text marginTop={"2rem"} textStart>
          Don't have account yet ?<Link to="/register"> Click here</Link>
        </Text>
      </Form>
    </>
  );
};

export default Login;
