import React from 'react'
import { Switch,Route } from "react-router-dom";
import {AppRoute,ProtectedRoute} from './';
import {CommonLayout,FormLayout,Login,Register} from '../components';
import {HomePage,NotFound,Unauthorized } from '../pages';
import img from '../assets/images/form.png'




  

export const MainRouter = () => {

    
    return (
       <Switch>
         
           <AppRoute exact path="/" component={HomePage} layout={CommonLayout}/>
           <Route path="/unauthorized" component={Unauthorized}/>
           <AppRoute img={img} path="/login" component={Login} layout={FormLayout}/>
           <AppRoute img={img} path="/register" component={Register} layout={FormLayout}/>
           <Route path="*" component={NotFound}/>

       </Switch>
    )
}


