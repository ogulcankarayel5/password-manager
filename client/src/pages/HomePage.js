import React from 'react'
import {Helmet} from "react-helmet";
import {MainContent} from '../components';
import {useDispatch} from 'react-redux'
import {login} from '../actions'
export const HomePage = () => {
   
    // const dispatch= useDispatch()
    // dispatch(login())

    const head = () => {
        return (
            <Helmet bodyAttributes={{class:"homePage"}}>
                <title>Home Page</title>
                <meta name="description" content="Welcome to Lucky Password"/>
            </Helmet>
        )
    }
  
    return (
       <>
        {head()}
        <MainContent/>
       
        
       </>
      
    )
}


