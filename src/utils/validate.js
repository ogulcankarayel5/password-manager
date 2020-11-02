export function validate(values, formType) {
  let errors = {};


  
  // Email Errors
  if (formType === "register") {
    if (!values.email.trim()) {
      errors.email = "Required Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  }
  // Password Errors
  
    if (!values.password.trim()) {
      errors.password = "Required Password";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  

  //username
 if(formType!=="resetPassword"){
  if (!values.username.trim()) {
    errors.username = "Required username";
  } else if (values.username.length < 5) {
    errors.username = "Username must be at least 5 characters";
  }
 }
  return errors;
}


export class Validate {
  
  constructor(values){
    this.values=values
    this.errors={}
  }

  passwordValidator(){
    if (!this.values.password) {
      this.errors.password = "Required Password";
    } else if (this.values.password.length < 6) {
      this.errors.password = "Password must be at least 6 characters";
    }
    return this.errors
  }

  usernameValidator(){
    if (!this.values.username) {
      this.errors.username = "Required username";
    } else if (this.values.username.length < 5) {
      this.errors.username = "Username must be at least 5 characters";
    }
    return this.errors;
  }

  emailValidator(){
    if (!this.values.email) {
      this.errors.email = "Required Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.values.email)) {
      this.errors.email = "Invalid email address";
    }
    return this.errors
  }

}