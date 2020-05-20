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

const registerRequest = () => {
    return {
        type:authConstants.REGISTER_REQUEST
    }
};

const registerSuccess = (user) => {
    return {
        type:authConstants.REGISTER_SUCCESS,
        payload:user
    }
}

const registerFailure = () => {
    return {
        type:authConstants.REGISTER_FAILURE
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
        console.log(err.response)
        dispatch(loginFailure());
        dispatch(setErrors(err.response));

    }


}

const register = user => async (dispatch) => {

    try{
        dispatch(registerRequest());
        const response = await userService.register(user);
       
        dispatch(registerSuccess(response.data));
        history.push("/")
        
    }catch(err){
        console.log(err.response)
        dispatch(registerFailure())
        dispatch(setErrors(err.response))
        
    }
}



export {login,register}