import React from 'react'
import {Helmet} from 'react-helmet'
import {StatusError} from '../components'
import { ThemeConsumer } from 'styled-components'
export const Unauthorized = () => {


  const head = () => {
    return (
      <Helmet  bodyAttributes={{class:"loginPage"}}>
        <title>Unauthorized Page</title>
        <meta name="description" content="This is Unauthorizedpage"/>
      </Helmet>
    )
  }
    return (
     <>
     {head()}
      <ThemeConsumer>
          {theme =>  <StatusError description={"You're not authorized to access this route"} title={401} color={theme.errorButtonBackground}/>}
      </ThemeConsumer>
     
     
     
     </>
    )
}
