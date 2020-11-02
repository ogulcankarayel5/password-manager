import React from "react";
import { FaLock } from "react-icons/fa";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Reaptcha from "reaptcha";
import { useTheme } from "styled-components";
import { ButtonComponent, ErrorText, FormInput, SEO } from "../components";
import { Form } from "../components/form";
import { useForm, useQuery } from "../hooks";
import { authActions } from "../store/actions";
import { validate } from "../utils";



const ResetPassword = (props) => {
  let query = useQuery()

  const dispatch = useDispatch();
  const theme = useTheme()
  console.log(theme)
  const { user, serverErrors, isAuthenticated } = useSelector(
    (state) => ({
      user: state.authReducer.user,
      serverErrors: state.errorReducer.errors,
      isAuthenticated: state.authReducer.isAuthenticated,
    }),
    shallowEqual
  );

  const initialState = {
   
    password: "",
  };

  const submit = () => {
    
    console.log("hyyysbumt");
    console.log("password: ",values.password)
    dispatch(authActions.resetPassword(query.get("resetPasswordToken"),values.password))
    

  };



  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReCAPTCHA,
  } = useForm(initialState, validate, submit, "resetPassword");



  //userform kaldırıldı
  return (
    <>
      <SEO title="ResetPassword" description="Reset Password Page" />
     
      <Form submit={handleSubmit}>
        
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

        

        <Reaptcha
          sitekey={process.env.REACT_APP_TEST_SITE_KEY}
          onVerify={handleReCAPTCHA}
        />
        <ButtonComponent type="submit" spanText="Reset Password" />
       
        
       
      </Form>
 
    </>
  );
};

export default ResetPassword;
