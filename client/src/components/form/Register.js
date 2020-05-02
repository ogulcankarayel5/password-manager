import React from "react";
import {Link} from 'react-router-dom';
import { UserForm } from "./UserForm";
import {Text} from '../utils';
import { FaRegEnvelope,FaLock,FaUser } from "react-icons/fa";
export const Register = () => {
  return (
    <UserForm type="register">
      <div className="form-group">
        <input name="email" type="email" placeholder="Email" />
        <FaRegEnvelope size={"3rem"} color={"dodgerBlue"} />
      </div>
      <div className="form-group">
          <input name="name" type="text" placeholder="Username"/>
          <FaUser size={"3rem"} color={"dodgerBlue"} />
      </div>
      <div className="form-group">
        <input name="password" type="password" placeholder="Password" />
        <FaLock size={"3rem"} color={"dodgerBlue"} />
      </div>
      <div className="form-group">
          <Text>Do you have already account ?</Text>
          <Link to="/login">Click here</Link>
      </div>
    </UserForm>
  );
};
