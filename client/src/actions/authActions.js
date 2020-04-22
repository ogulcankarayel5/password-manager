import {authConstants} from '../constants';
import {userService} from '../services';
import {history} from '../utils';
import {setErrors,clearErrors} from './';

//plain actions
const loginRequest = () => {
    return {
        type:authConstants.LOGIN_REQUEST
    }
};

const loginSuccess = (user) => {
    return {
        type:authConstants.LOGIN_SUCCESS,
        payload:user
    }
}

const loginFailure = () => {
    return {
        type:authConstants.LOGIN_FAILURE
    }
}



//thunk
const login = (user) => async (dispatch) => {
    try{
        dispatch(loginRequest());
        const response = await userService.login(user);
        
        dispatch(loginSuccess(response.data));


    }
    catch(err){
        dispatch(loginFailure());
        dispatch(setErrors(err));

    }


}

export {login}