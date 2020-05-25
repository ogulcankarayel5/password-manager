import React from 'react'

import bg from '../../assets/images/bg2.png';
import {ResponsiveImage} from '../../shared'
import {RightContainer} from './styles'


export const MainRightContent = () => {
    return (
      <RightContainer>
           <ResponsiveImage src={bg}/>
      </RightContainer>
    )
}

