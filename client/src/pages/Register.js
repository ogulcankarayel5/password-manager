import React from "react";
import {Helmet} from 'react-helmet'
import {useDispatch,useSelector,shallowEqual} from 'react-redux';
import {register, clearErrors} from '../actions'
import { useForm } from "../hooks";
import { validate } from "../utils";
import { Text } from "../shared";
import { Link } from "react-router-dom";
import { ErrorText, FormInput, FormHoc, SocialButtonComponent } from "../components/Form";
import { FaRegEnvelope, FaLock, FaUser } from "react-icons/fa";
import Reaptcha from 'reaptcha';
import {ShowToast} from '../utils/showToast'
import ClipLoader from "react-spinners/ClipLoader";



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
    dispatch(clearErrors())
    dispatch(register(user))  

  };
  const head = () => {
    return (
      <Helmet  bodyAttributes={{class:"loginPage"}}>
        <title>Register Page</title>
        <meta name="description" content="This is registerpage"/>
      </Helmet>
    )
  }

 



  const { values, errors, handleChange, handleBlur, handleSubmit,handleReCAPTCHA } = useForm(
    initialState,
    validate,
    submit,
    "register",
  );

console.log("register")

  return (
   
   <>
   {head()}
    <form onSubmit={handleSubmit}>
      {serverErrors && serverErrors.map((error,index) => <ShowToast key={index} message={error.message} type="error"/>)}
      <div className="form-group form-group-error">
        
        <FormInput
          className={`${errors.username && "input-error"}`}
          name="username"
          type="text"
          ariaLabel="Username"
          
          placeholder="Username"
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

export default FormHoc(Register);
