import React from 'react'
import styled from 'styled-components';
import Navbar from '../header/Navbar';


const HeaderContainer = styled.header`


grid-column:2/3;
grid-row:1/2;
display:flex;
align-items:center;

`


const Header = () => {
    return (
       <HeaderContainer>
           <Navbar/>
       </HeaderContainer>
    )
}

export default Header;
