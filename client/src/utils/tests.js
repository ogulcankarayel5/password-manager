


import checkPropTypes from 'check-prop-types';
import {applyMiddleware,createStore} from 'redux';
import rootReducer from '../reducers'
import {middleware} from '../utils'

export const checkProps = (component,expectedProps) => {

    const propsErr = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErr;
}


export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const testStore = (initialState) => {
    
     const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
     return createStoreWithMiddleware(rootReducer,initialState);
}