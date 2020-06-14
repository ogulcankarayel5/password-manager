import React from "react";


import {GoogleLogin} from 'react-google-login';
import { ReactComponent as GoogleSvg } from "../assets/icons/google.svg";
import { ReactComponent as LinkedinSvg } from "../assets/icons/linkedin.svg";
import {
  
  ErrorText,
  FormInput,
  FormHoc,
  SocialButtonComponent,
  SEO
} from "../components";
import { useSelector,useDispatch } from "react-redux";
import {authActions} from '../actions'
import { Text } from "../shared";
import { Link } from "react-router-dom";

import { FaUser, FaLock } from "react-icons/fa";

import { useForm } from "../hooks";

import { validate,generateApiEndpoint } from "../utils";

import Reaptcha from 'reaptcha';
import { withTheme } from "styled-components";



const Login = (props) => {

  const dispatch=useDispatch();
  const initialState = {
    username: "",
    password: "",
   
    
  };
  const {theme}=props;

 

  const submit = () => {
    console.log("hyyysbumt");
  };

  const onClickGoogle = (res) => {
    console.log(res);
    dispatch(authActions.loginWithGoogle(res.accessToken));
  }





  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReCAPTCHA
    
  } = useForm(initialState, validate, submit, "login");

  const {isAuthenticated,refreshToken,user} = useSelector(state => ({
    isAuthenticated:state.authReducer.isAuthenticated,
    refreshToken:state.authReducer.refresh_token,
    user:state.authReducer.user
  }) 
  );
  console.log(isAuthenticated);
  console.log(user)
  console.log(refreshToken)
 
 
  //userform kaldırıldı
  return (
   <>
   
   <SEO title="Login" description="Login Page"/>
   <form onSubmit={handleSubmit}>
          <div className="form-group form-group-error">
            <a href="/api/auth/google">deneme</a>
            <FormInput
              className={`${errors.username && "input-error"}`}
              name="username"
              type="text" 
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              ariaLabel="Username"
              icon={<FaUser size={"3rem"} color={theme.colors.formInputBorderColor} />}
            />
          </div>
          {errors.username && <ErrorText>{errors.username}</ErrorText>}
          <div className="form-group form-group-error">
            <FormInput
              name="password"
              type="password"
              ariaLabel="Password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              icon={<FaLock size={"3rem"} color={theme.colors.formInputBorderColor} />}
            />
          </div>
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
          <div className="form-group form-group-start">
            <div className="formCheck">
              <input type="checkbox" />
              <Text>Remember me</Text>
            </div>

            <Link to="/register">Forgot Password ?</Link>
          </div>

            <Reaptcha sitekey={process.env.REACT_APP_TEST_SITE_KEY} onVerify={handleReCAPTCHA} /> 
          
           
          <SocialButtonComponent type="submit" spanText="Login"/>
         
          <Text marginTop={"3.5rem"}>Or</Text>
       
          <GoogleLogin
          
          clientId="1082138651796-2a67u657k8sn5d4qhbg0ni8q6e29rboc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onClickGoogle}
          onFailure={onClickGoogle}
          />
          <SocialButtonComponent
          type="button"
          
            background={theme.colors.background}
            color={theme.colors.formSocialPrimaryColor}
            borderColor={theme.colors.formSocialPrimaryColor}
            svg={<GoogleSvg />}
            spanText="Login with Google"
          />
          <SocialButtonComponent background={theme.colors.background}
          color={theme.colors.formSocialSecondaryColor}
          borderColor={theme.colors.formSocialSecondaryColor}
          svg={<LinkedinSvg/>}
          spanText="Login with Linkedin"
          />
          <Text marginTop={"2rem"} textStart>
            Don't have account yet ?<Link to="/register"> Click here</Link>
          </Text>
        </form>
   
   </>

        
    
  );
};

export default withTheme(Login);
