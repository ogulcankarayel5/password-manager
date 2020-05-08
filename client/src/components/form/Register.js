import React from "react";
import {useForm} from '../../hooks'
import { validate } from "../../utils/";
import {Text} from '../utils'
import {Link} from 'react-router-dom'
import {
 
  ErrorText,
  FormInput,
  FormHoc,
  SocialButtonComponent,
} from "./";
import { FaRegEnvelope,FaLock,FaUser } from "react-icons/fa";

const Register = (props) => {

  const initialState={
    email:"",
    username:"",
    password:""
  }

  const {theme} = props;

  const submit = () => {

  }
    const {
     values,
     errors,
     handleChange,
    handleBlur,
     handleSubmit,
    
   } = useForm(initialState, validate, submit, "register");
  return (
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
              icon={<FaUser size={"3rem"} color={theme.colors.formInputBorderColor} />}
            />
          </div>
          {errors.username && <ErrorText>{errors.username}</ErrorText>}
          <div className="form-group form-group-error">
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              icon={<FaLock size={"3rem"} color={theme.colors.formInputBorderColor} />}
            />
          </div>
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
          <div className="form-group form-group-error">
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              icon={<FaRegEnvelope size={"3rem"} color={theme.colors.formInputBorderColor} />}
            />
          </div>
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
          <SocialButtonComponent type="submit" spanText="Register"/>
          <Text marginTop={"2rem"} textStart>
           Do you have already an account ?<Link to="/login"> Click here to login</Link>
          </Text>


   </form>
  );
};

export default FormHoc(Register);