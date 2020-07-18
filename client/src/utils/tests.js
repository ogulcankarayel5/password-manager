

import React from 'react'
import {applyMiddleware,createStore} from 'redux';
import checkPropTypes from 'check-prop-types';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import rootReducer from '../store/reducers'
import {middleware} from '../utils'
import { HelmetProvider } from 'react-helmet-async';

export const checkProps = (component,expectedProps) => {

    const propsErr = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErr;
}

export const renderWithRedux = (component,store) => {

    return (
        <Provider store={store}>
            {component}
        </Provider>
    )
}

export const renderWithTheme = (component,theme) => {

    return (
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    )
}

export const renderWithHelmet = (component) => {
    return (
        <HelmetProvider>
            {component}
        </HelmetProvider>
    )
}




export const findByTestAtrr = (component, attr) => {
    
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const testStore = (initialState) => {
    
     const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
     return createStoreWithMiddleware(rootReducer,initialState);
}