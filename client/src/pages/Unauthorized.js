import React from 'react'
import {StatusError} from '../components'

export const Unauthorized = () => {
    return (
       <StatusError description={"You're not authorized to access this route"} title={401}/>
    )
}
