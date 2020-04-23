import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import {MainContent} from '../components';
import {login} from '../actions';

export const HomePage = () => {

    const dispatch = useDispatch();
    
    dispatch(login());

    return (
       <>
        
        <MainContent/>
       
        
       </>
      
    )
}


