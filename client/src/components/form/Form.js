import React from "react";
import { Link } from "react-router-dom";
import Reaptcha from "reaptcha";
import { FaUser, FaLock, FaRegEnvelope } from "react-icons/fa";
import { Text } from "../../shared";
import { GoogleLogin } from "react-google-login";

import { ShowToast } from "../../utils";

import { ErrorText, FormInput, ButtonComponent } from "./";

export const Form = ({ submit, theme, ...rest }) => {
  const props = { ...rest };
  console.log("re-render");
  console.log(props);
  return (
    <form onSubmit={submit}>
      <div className="form-group form-group-error">
        {props.serverErrors &&
          props.serverErrors.map((error, index) => (
            <ShowToast key={index} message={error.message} type="error" />
          ))}
        <FormInput
          className={`${props.errors.username && "input-error"}`}
          name="username"
          type="text"
          placeholder="Username"
          value={props.values.username}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          ariaLabel="Username"
          icon={
            <FaUser size={"3rem"} color={theme.colors.formInputBorderColor} />
          }
        />
      </div>
      {props.errors.username && <ErrorText>{props.errors.username}</ErrorText>}
      <div className="form-group form-group-error">
        <FormInput
          name="password"
          type="password"
          ariaLabel="Password"
          placeholder="Password"
          value={props.values.password}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          icon={
            <FaLock size={"3rem"} color={theme.colors.formInputBorderColor} />
          }
        />
      </div>
      {props.errors.password && <ErrorText>{props.errors.password}</ErrorText>}
      {props.registerForm && (
        <>
          <div className="form-group form-group-error">
            <FormInput
              data-test="form-input"
              className={`${props.errors.email && "input-error"}`}
              name="email"
              type="email"
              ariaLabel="Email"
              placeholder="Email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              icon={
                <FaRegEnvelope
                  size={"3rem"}
                  color={theme.colors.formInputBorderColor}
                />
              }
            />
          </div>
          {props.errors.email && <ErrorText>{props.errors.email}</ErrorText>}
        </>
      )}

      <div className="form-group form-group-start">
        {props.registerForm && (
          <>
            <div className="formCheck">
              <input type="checkbox" />
              <Text>Remember me</Text>
            </div>
          </>
        )}

        <Link to={props.registerForm ? "/register" : "/login"}>
          Forgot Password ?
        </Link>
      </div>

      <Reaptcha
        sitekey={process.env.REACT_APP_TEST_SITE_KEY}
        onVerify={props.handleReCAPTCHA}
      />

      <ButtonComponent type="submit" spanText={props.registerForm ? 'Register' : 'Login'} />
      <Text marginTop={"2rem"}>Or</Text>
      {props.loginForm && (
        <GoogleLogin
          clientId="1082138651796-2a67u657k8sn5d4qhbg0ni8q6e29rboc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={props.onClickGoogle}
          onFailure={props.onClickGoogle}
        />
      )}
      <Text marginTop={"2rem"} textStart>
        {props.loginForm ? (
          <>
            Don't have account yet ?<Link to="/register"> Click here</Link>
          </>
        ) : (
          <>
            Do you have already an account ?
            <Link to="/login"> If you want click here to login</Link>
          </>
        )}
      </Text>
    </form>
  );
};
