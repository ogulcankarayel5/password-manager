import React from 'react'
import {StatusError} from '../components'
import { ThemeConsumer } from 'styled-components'
export const Unauthorized = () => {
    return (
      <ThemeConsumer>
          {theme =>  <StatusError description={"You're not authorized to access this route"} title={401} color={theme.errorButtonBackground}/>}
      </ThemeConsumer>
    )
}
