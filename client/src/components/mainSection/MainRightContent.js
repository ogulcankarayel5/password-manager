import React from 'react'
import styled from 'styled-components';
import bg from '../../assets/images/bg.png';

const RightContainer=styled.div`
flex:1;

`
const ContentImage = styled.img`
width:100%;
height:auto;

`

export const MainRightContent = () => {
    return (
      <RightContainer>
           <ContentImage src={bg}/>
      </RightContainer>
    )
}

