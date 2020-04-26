import React from 'react'
import { Switch,Route } from "react-router-dom";
import {AppRoute,ProtectedRoute} from './';
import {CommonLayout,StatusError} from '../components';
import {HomePage,NotFound,Unauthorized } from '../pages';





  

export const MainRouter = () => {

    
    return (
       <Switch>
         
           <AppRoute exact path="/" component={HomePage} layout={CommonLayout}/>
           <Route path="/unauthorized" component={Unauthorized}/>
           <Route path="*" component={NotFound}/>

       </Switch>
    )
}


