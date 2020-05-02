import React from 'react'
import {StatusError} from '../components'
import { ThemeConsumer } from 'styled-components'
export const NotFound = () => {
    
    
    
    return (
        <ThemeConsumer>
            {theme => 
            
            <StatusError title={404} description={"The page doesn't exist"} color={theme.colors.errorButtonBackground}/>}
        </ThemeConsumer>
    )
}

