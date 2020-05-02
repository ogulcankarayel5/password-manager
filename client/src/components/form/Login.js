import React from "react";


import { Link } from "react-router-dom";
import { Text } from "../utils";
import { FaUser, FaLock } from "react-icons/fa";
import { UserForm } from "./UserForm";

export const Login = () => {
  return (
    <UserForm type="login">
      <div className="form-group">
        <input name="name" type="text" required placeholder="Username" />
        <FaUser size={"3rem"} color={"dodgerBlue"} />
      </div>
      <div className="form-group">
        <input name="password" type="password" placeholder="Password" />
        <FaLock size={"3rem"} color={"dodgerBlue"} />
      </div>
      <div className="form-group form-group-start">
        <div className="formCheck">
          <input type="checkbox" />
          <Text>Remember me</Text>
        </div>

        <Link>Forgot Password ?</Link>
      </div>
    </UserForm>
  );
};
