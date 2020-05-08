import React, { useState, useEffect } from "react";

export const useForm = (initialState, validate, callback, formType) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  
  const handleBlur = () => {
    const validationErrors = validate(values, formType);
    setErrors(validationErrors);
  };

  const handleChange = (event) => {
    const validationErrors = validate(values, formType);

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setErrors(validationErrors);
    console.log(validationErrors);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);

    console.log(values);
  }

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  };
};
