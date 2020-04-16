import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Key} from '../../../assets/icons/unlock.svg';


const Nav = styled.nav`

display:flex;

`

const NavList = styled.ul`

display:flex;


`
const Navbar = () => {
    return (
        <Nav>
            <div>
                <Key/>
            </div>
            <NavList>
                
            </NavList>

        </Nav>
    )
}

export default Navbar
