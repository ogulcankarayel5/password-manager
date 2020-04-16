import React from 'react'
import styled from 'styled-components';
import Header from '../common/Header';
import Footer from '../common/Footer';

const CommonLayoutContainer = styled.div`
    height:100vh;
    display:grid;
    grid-template-columns:1fr 90% 1fr;
    grid-template-rows:1fr 4fr 1fr;

`;

const CommonLayout = ({children}) => {
    return (
        <CommonLayoutContainer>
            <Header/>
            {children}
            <Footer/>
            
        </CommonLayoutContainer>
    )
}

export default CommonLayout
