import React from 'react'

import {StatusError,SEO} from '../components'
import { ThemeConsumer } from 'styled-components'
export const NotFound = () => {

   
    
    return (
        <>
        <SEO title="404 Not Found" description={"404 error. Sayfa yok"}/>
        <ThemeConsumer>
            {theme => 
            
            <StatusError title={404} description={"The page doesn't exist"} color={theme.colors.errorButtonBackground}/>}
        </ThemeConsumer>
        </>
    )
}

