import React from 'react'
import {Helmet} from 'react-helmet'
import {StatusError} from '../components'
import { ThemeConsumer } from 'styled-components'
export const NotFound = () => {

    const head = () => {
        return (
          <Helmet  bodyAttributes={{class:"loginPage"}}>
            <title>Not Found</title>
            <meta name="description" content="This is Not found page"/>
          </Helmet>
        )
      }
    
    
    return (
        <>
        {head()}
        <ThemeConsumer>
            {theme => 
            
            <StatusError title={404} description={"The page doesn't exist"} color={theme.colors.errorButtonBackground}/>}
        </ThemeConsumer>
        </>
    )
}

