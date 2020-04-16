import React from 'react'
import { Switch } from "react-router-dom";
import AppRoute from './AppRoute';
import CommonLayout from '../components/layout/CommonLayout';
import HomePage from '../pages/HomePage';


const MainRouter = () => {

    
    return (
       <Switch>
           <AppRoute exact path="/" component={HomePage} layout={CommonLayout}/>
       </Switch>
    )
}

export default MainRouter
