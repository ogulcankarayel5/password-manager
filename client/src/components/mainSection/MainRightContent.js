import React from 'react'
import styled from 'styled-components';
import bg from '../../assets/images/bg2.png';
import {ResponsiveImage} from '../'
const RightContainer=styled.div`

flex:1;

`


export const MainRightContent = () => {
    return (
      <RightContainer>
           <ResponsiveImage src={bg}/>
      </RightContainer>
    )
}

