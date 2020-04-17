import React from 'react'
import styled from 'styled-components';

import MainLeftContent from './MainLeftContent';
import MainRightContent from './MainRightContent';

const MainContainer = styled.div`

grid-column:2/3;
grid-row:2/3;
display:flex;
align-items:center;
justify-content:center;


`
const MainContent = () => {
    return (
        <MainContainer>
           
         
           <MainLeftContent/>
            <MainRightContent/>
           
            
        </MainContainer>
    )
}

export default MainContent

/**background-color: ${props =>
  ({
    primary: 'blue',
    danger: 'red',
    warning: 'yellow'
  })[props.type]
} */