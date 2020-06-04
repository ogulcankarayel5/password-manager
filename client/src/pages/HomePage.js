import React from 'react'


import {MainContent,SEO} from '../components';
import {useDispatch} from 'react-redux'
import {login} from '../actions'

export const HomePage = () => {
   
    // const dispatch= useDispatch()
    // dispatch(login())

  
    return (
       <>
        <SEO title="Home"/>
        <MainContent/>
       
        
       </>
      
    )
}


