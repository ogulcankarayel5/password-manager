
import { combineReducers } from 'redux';
import {authReducer} from './authReducer';
import {errorReducer} from './errorReducer';
const rootReducer =combineReducers({
    authReducer,
    errorReducer,
});

export default rootReducer;