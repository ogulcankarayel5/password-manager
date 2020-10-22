import React from 'react'

import bg from '../../assets/images/bg2.png';
import {ResponsiveImage} from '../../shared'
import {RightContainer} from './styles'


export const MainRightContent = () => {
    return (
      <RightContainer>
           <ResponsiveImage effect="blur" alt={"img"} src={"https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1592483350/bg2_n7zsha.png"}/>
      </RightContainer>
    )
}

