import { authConstants } from "../constants";
import {REQUEST,SUCCESS,ERROR} from '../utils'
import { userService } from "../services";
import { history } from "../utils";
import { errorActions } from "./";

//plain actions
const loginRequest = () => {
  return {
    type: REQUEST(authConstants.LOGIN),
  };
};

const loginSuccess = (user) => {
  return {
    type: SUCCESS(authConstants.LOGIN),
    payload: user,
  };
};

const loginFailure = () => {
  return {
    type:ERROR( authConstants.LOGIN),
  };
};

const registerRequest = () => {
  return {
    type:REQUEST(authConstants.REGISTER),
  };
};

const registerSuccess = (user) => {
  return {
    type: SUCCESS(authConstants.REGISTER_),
    payload: user,
  };
};

const registerFailure = () => {
  return {
    type: ERROR(authConstants.REGISTER),
  };
};

//thunk
const login = (user) => async (dispatch) => {
  try {
    console.log(user);
    dispatch(loginRequest());
    const response = await userService.login(user);

    dispatch(loginSuccess(response.data));
  } catch (err) {
    console.log(err.response);
    dispatch(loginFailure());
    dispatch(errorActions.setErrors(err.response));
  }
};

const register = (user) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const response = await userService.register(user);
   
    dispatch(registerSuccess(response.data));
    history.push("/");
  } catch (err) {
     
    console.log(err.response.data);
    dispatch(registerFailure());
    dispatch(errorActions.setErrors(err.response.data,err.response.status));
  }
};

export const authActions = {
  login,
  register,
  loginRequest,
  loginSuccess,
  registerRequest,
  registerSuccess,
  registerFailure,
};
