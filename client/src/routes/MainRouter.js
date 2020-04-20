import React from 'react'
import { Switch,Route } from "react-router-dom";
import {AppRoute} from './AppRoute';
import {CommonLayout} from '../components';
import {HomePage,NotFound} from '../pages';



export const MainRouter = () => {

    
    return (
       <Switch>
         
           <AppRoute exact path="/" component={HomePage} layout={CommonLayout}/>
           <Route component={NotFound}/>

       </Switch>
    )
}


