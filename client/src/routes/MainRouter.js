import React from 'react'
import { Switch,Route } from "react-router-dom";
import {AppRoute} from './AppRoute';
import {CommonLayout,StatusError} from '../components';
import {HomePage,NotFound} from '../pages';
import image from '../assets/images/Opera Anlık Görüntü_2020-04-23_213740_dribbble.com.png';




  

export const MainRouter = () => {

    
    return (
       <Switch>
         
           <AppRoute exact path="/" component={HomePage} layout={CommonLayout}/>
           
           <Route path="*" component={NotFound}/>

       </Switch>
    )
}


