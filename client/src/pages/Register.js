import React from "react";

import {useDispatch,useSelector,shallowEqual} from 'react-redux';

import {authActions, errorActions} from '../actions'
import { useForm } from "../hooks";
import { validate } from "../utils";
import { Text } from "../shared";
import { Link } from "react-router-dom";
import { ErrorText, FormInput, FormHoc, SocialButtonComponent,SEO } from "../components";
import { FaRegEnvelope, FaLock, FaUser } from "react-icons/fa";
import Reaptcha from 'reaptcha';
import {ShowToast} from '../utils/showToast'
import ClipLoader from "react-spinners/ClipLoader";
import { withTheme } from "styled-components";



const Register = (props) => {

  const dispatch=useDispatch()

  const {serverErrors,loading}= useSelector(state=>({
    serverErrors:state.errorReducer.errors,
    loading:state.authReducer.loading
  }))
  
  const initialState = {
    email: "",
    username: "",
    password: "",
  };

  const { theme } = props;

  const submit =  () => {
    const {username,password,email}=values
    const user={
     name:username,password,email
    }
    dispatch(errorActions.clearErrors())
    dispatch(authActions.register(user))  

  };
  
 



  const { values, errors, handleChange, handleBlur, handleSubmit,handleReCAPTCHA } = useForm(
    initialState,
    validate,
    submit,
    "register",
  );

console.log("register")
console.log(serverErrors)
  return (
   
   <>
   <SEO title="Register" description="Register Page"/>
    <form onSubmit={handleSubmit} data-test="form">
      {serverErrors && serverErrors.map((error,index) => <ShowToast key={index} message={error.message} type="error"/>)}
      <div className="form-group form-group-error">
        
        <FormInput
         data-testid="form-input"
          data-test="form-input"
          className={`${errors.username && "input-error"}`}
          name="username"
          type="text"
          ariaLabel="Username" placeholder="Username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          icon={
            <FaUser size={"3rem"} color={theme.colors.formInputBorderColor} />
          }
        />
      </div>
      {errors.username && <ErrorText>{errors.username}</ErrorText>}
      <div className="form-group form-group-error">
        <FormInput
         data-test="form-input"
          className={`${errors.password && "input-error"}`}
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
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <div className="form-group form-group-error">
        <FormInput
           data-test="form-input"
          className={`${errors.email && "input-error"}`}
          name="email"
          type="email"
          ariaLabel="Email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          icon={
            <FaRegEnvelope
              size={"3rem"}
              color={theme.colors.formInputBorderColor}
            />
          }
        />
      </div>
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      {/* <Reaptcha sitekey={process.env.REACT_APP_TEST_SITE_KEY} onVerify={handleReCAPTCHA}/> */}
   
      
      {loading ? <SocialButtonComponent spanText={<ClipLoader/>}/> :<SocialButtonComponent type="submit" spanText="Register" />}
      <Text marginTop={"2rem"} textStart>
        Do you have already an account ?
        <Link to="/login"> If you want click here to login</Link>
      </Text>
     
      
    </form>
   
   
   
   </>
  );
};

export default withTheme(Register);
