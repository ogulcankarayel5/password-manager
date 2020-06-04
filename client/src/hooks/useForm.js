import React, { useState, useEffect,useLayoutEffect } from "react";
import { clearErrors } from "../actions";
import {Validate} from '../utils'

export const useForm = (initialState, validate, callback, formType) => {
  const [values, setValues] = useState(initialState);
  const [reCaptcha,setReCaptcha] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    console.log("error")
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
     
      //loadingi beklemesi lazım
      clearForm()
      
      
    }
  }, [errors]);

  useEffect(()=>{
   
    console.log(values)
    
    if(values!==initialState){
      const validationErrors = validate(values, formType);
      setErrors(validationErrors);
    }
  
    
  },[values])

  

  
  const handleBlur = () => {
    const validationErrors = validate(values, formType);
    setErrors(validationErrors);
    
  };

  const handleChange = (event) => {
    
    setValues({
      ...values,
      [event.target.name]: event.target.value,
     

    });
  
  
    
    
   
    
  };

  
  const handleReCAPTCHA = (value) => {
   
      
    if(value){
      setReCaptcha(true)
    }
    else{
      setReCaptcha(false)
    }   
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values,formType);
    setErrors(validationErrors);
    setSubmitting(true);
    console.log(values)
    
  }

  const clearForm = () => {
    setValues(initialState)
    setSubmitting(false)
    
  }

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    handleReCAPTCHA
  };
};
