import React,{useEffect} from 'react'


import {MainContent,SEO} from '../components';
import {useDispatch} from 'react-redux'
import {authActions} from '../store/actions'

export const HomePage = () => {
   console.log("home")
    //  const dispatch= useDispatch()
    //  useEffect(()=>{
    //      dispatch(authActions.register({name:"sel1wswwwwdssswswdsa1w",email:"k2w@wssswwsddwsgwsmww1sails.com",password:"1331313131"}));
    //  },[])

   
  
    return (
       <>
        <SEO title="Home"/>
        <MainContent/>
       
        
       </>
      
    )
}


