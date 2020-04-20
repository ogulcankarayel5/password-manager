import React from 'react'
import styled from 'styled-components';

import{ MainLeftContent,MainRightContent} from './';


const MainContainer = styled.div`

grid-column:2/3;
grid-row:2/3;
display:flex;
align-items:center;
justify-content:center;


`
export const MainContent = () => {
    return (
        <MainContainer>
           
         
           <MainLeftContent/>
            <MainRightContent/>
           
            
        </MainContainer>
    )
}


