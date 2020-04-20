import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Key } from "../../assets/icons/fingerprint.svg";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;

  & div {
    justify-self: start;
    flex: 1;
  }
  svg {
    height: 3rem;
    width: 3rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex: 1;

  justify-content: space-between;

  & li a {
    color: ${(props) => props.theme.colors.headerText};
  }


`;
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

