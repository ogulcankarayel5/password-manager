import React from "react";
import {Helmet} from 'react-helmet'
//TODO:react helmet devam
import { ReactComponent as GoogleSvg } from "../assets/icons/google.svg";
import { ReactComponent as LinkedinSvg } from "../assets/icons/linkedin.svg";
import {
  
  ErrorText,
  FormInput,
  FormHoc,
  SocialButtonComponent,
} from "../components/Form";

import { Text } from "../shared";
import { Link } from "react-router-dom";

import { FaUser, FaLock } from "react-icons/fa";

import { useForm } from "../hooks";

import { validate } from "../utils";

import Reaptcha from 'reaptcha';



const Login = (props) => {
  const initialState = {
    username: "",
    password: "",
   
    
  };





  const {theme}=props;

  console.log("login");

  const submit = () => {
    console.log("hyyysbumt");
  };

  const head = () => {
    return (
      <Helmet  bodyAttributes={{class:"loginPage"}}>
        <title>Login Page</title>
        <meta name="description" content="This is login page"/>
      </Helmet>
    )
  }

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReCAPTCHA
    
  } = useForm(initialState, validate, submit, "login");


 

  //userform kaldırıldı
  return (
   <>
   {head()}
   
   <form onSubmit={handleSubmit}>
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
       
          <SocialButtonComponent
          type="button"
          onClick={()=>console.log("hello google")}
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

export default FormHoc(Login);
