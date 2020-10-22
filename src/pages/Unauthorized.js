import React from 'react'

import {StatusError,SEO} from '../components'
import { ThemeConsumer } from 'styled-components'
export const Unauthorized = () => {


 
    return (
     <>
    <SEO title="401 Error" description="Unauthorized"/>
      <ThemeConsumer>
          {theme =>  <StatusError description={"You're not authorized to access this route"} title={401} color={theme.errorButtonBackground}/>}
      </ThemeConsumer>
     
     
     
     </>
    )
}
