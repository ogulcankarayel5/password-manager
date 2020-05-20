import React from "react";
import { Link } from "react-router-dom";
import {Nav,NavList} from './styles'
import { ReactComponent as Key } from "../../assets/icons/fingerprint.svg";


export const Navbar = () => {
  return (
    <Nav>
      <div>
        <Key />
      </div>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </NavList>
    </Nav>
  );
};

