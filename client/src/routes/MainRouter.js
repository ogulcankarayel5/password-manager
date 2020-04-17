import React from 'react'
import { Switch,Route } from "react-router-dom";
import AppRoute from './AppRoute';
import CommonLayout from '../components/layout/CommonLayout';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';



const MainRouter = () => {

    
    return (
       <Switch>
         
           <AppRoute exact path="/" component={HomePage} layout={CommonLayout}/>
           <Route component={NotFound}/>

       </Switch>
    )
}

export default MainRouter
