import { errorActions } from ".";
import { authConstants } from "../../constants";
import { accountService, userService } from "../../services";
import { getTokens, history, removeTokens, setToken, showToast } from "../../utils";
//plain actions

const request = () => {
  return {
    type:authConstants.REQUEST
  }
}


const logoutSuccess = () => {
  return {
    type:authConstants.LOGOUT_SUCCESSFUL
  }
}

const logoutFailure = () => {
  return {
    type:authConstants.LOGOUT_ERROR
  }
}


const initializeUserSuccess = (payload) => {
  return {
    type: authConstants.INITIALIZE_SUCCESS,
    payload: payload,
  };
};

const initializeUserFailure = () => {
  return {
    type: authConstants.INITIALIZE_ERROR,
  };
};



const loginSuccess = (user) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: user,
  };
};

const loginFailure = () => {
  return {
    type: authConstants.LOGIN_ERROR,
  };
};



const registerSuccess = (user) => {
  return {
    type: authConstants.REGISTER_SUCCESS,
    payload: user,
  };
};

const registerFailure = () => {
  return {
    type: authConstants.REGISTER_ERROR,
  };
};

const resetPasswordSuccess = () => {
  return {
    type:authConstants.RESET_PASSWORD_SUCCESS
  }
}

const resetPasswordFailure = () => {
  return{
    type:authConstants.RESET_PASSWORD_FAILURE
  }
}
//thunk



const logout = () => async (dispatch) => {
  try{
    // response gelmiyor çünkü api isteği yok bu yüzden catch içindeki err undefined. Api tarafıda logout oluşturup accesstoroute middlewareni koy ordan hata döndür 
 
    dispatch(request());
  
    const response = await userService.logout();
    
    await removeTokens();
    
    dispatch(logoutSuccess());
    console.log("logout")
    
  }
  catch(err){
    console.log("err:", err.response)
  
    dispatch(logoutFailure());
    dispatch(errorActions.setErrors(err.response));
  }
}
const initializeUser = () => async (dispatch) => {
 
  try {
  
    
    dispatch(request());
    console.log("heyyy")
    const user = await accountService.getCurrentUser();
    console.log("heyyy")
    const { accessToken } = getTokens();
    console.log(accessToken );
    const payload = {
      
      access_token: accessToken,
      data: user,
    };
    setToken(accessToken);
    console.log("setted token")
    dispatch(initializeUserSuccess(payload));
   
  } catch (err) {
    console.log(err)
    dispatch(initializeUserFailure());
    //dispatch(errorActions.setErrors(err.data,err.status));
  }
};
const login = (user) => async (dispatch) => {
 
  try {
    console.log(user);
    dispatch(request());
    const response = await userService.login(user);
    setToken(response.access_token);

    dispatch(loginSuccess(response));
    history.push("/");
  } catch (err) {
    console.log(err.response);
    dispatch(loginFailure());
    dispatch(errorActions.setErrors(err.response));
  }
};

const loginWithGoogle = (accessToken) => async (dispatch) => {
 
  try {
    dispatch(request());
    const response = await userService.loginWithGoogle(accessToken);
    console.log("response google action: ",response.access_token)
    setToken(response.access_token);
    dispatch(loginSuccess(response));
   
    history.push("/");
  showToast("success","Login successful")
  } catch (err) {
    console.log(err.response);
    dispatch(loginFailure());
    dispatch(errorActions.setErrors(err.response));
  }
};

const register = (user) => async (dispatch) => {
  const { REACT_APP_LOCALACCESS } = process.env;
  try {
    dispatch(request());
    const response = await userService.register(user);
 
    console.log(response.data)
    console.log(response)
    dispatch(registerSuccess(response.data));
    console.log("hey")
    localStorage.setItem(REACT_APP_LOCALACCESS, response.access_token);
    history.push("/");
  } catch (err) {
    console.log(err.data);
    dispatch(registerFailure());
    dispatch(errorActions.setErrors(err.data, err.status));
  }
};

const resetPassword = (query,password) => async (dispatch) => {
  try{
    dispatch(request())
    const response = await userService.resetPassword(query,password)
    dispatch(resetPasswordSuccess())
    
    showToast("success","Reset password successful")

  
    console.log(response)
  }catch(err){
    dispatch(resetPasswordFailure())
    showToast("error","Reset password failure")
    console.log(err)
  }
}

export const authActions = {
  initializeUser,
  login,
  loginWithGoogle,
  register,
 
  loginSuccess,
 
  registerSuccess,
  registerFailure,
  initializeUserFailure,
  logout,
  resetPassword
 
};
