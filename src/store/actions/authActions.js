import Cookies from "universal-cookie";
import { errorActions } from ".";
import { authConstants } from "../../constants";
import { accountService, userService } from "../../services";
import { getTokens, history, removeTokens, setToken } from "../../utils";
const cookies = new Cookies();
//plain actions

const initializeUserRequest = () => {
  return {
    type: authConstants.INITIALIZE_REQUEST,
  };
};

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

const loginRequest = () => {
  return {
    type: authConstants.LOGIN_REQUEST,
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

const registerRequest = () => {
  return {
    type: authConstants.REGISTER_REQUEST,
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

//thunk

const logout = () => async (dispatch) => {
  try{
    // response gelmiyor çünkü api isteği yok bu yüzden catch içindeki err undefined. Api tarafıda logout oluşturup accesstoroute middlewareni koy ordan hata döndür 
    //logouttan da 401 hatası dönünce döngüye giriyor
    dispatch(initializeUserRequest());
    //const {refreshToken,accessToken} = getTokens();
    //const response = await userService.logout();
    //console.log(response);
    await removeTokens();
    
    dispatch(initializeUserFailure());
    console.log("logout")
    history.push("/");
  }
  catch(err){
    console.log(err.response)
    console.log(err.response);
    dispatch(initializeUserFailure());
    dispatch(errorActions.setErrors(err.response));
  }
}
const initializeUser = () => async (dispatch) => {
 
  try {
  
    //requestı kaldırdım çünkü her saydfada initial oldugu ıcın requestte herşey sıfırlanıyor. Sonuç çıkana kadar işler olmuyor. Sonradan düzenleme yapıp ekleyince düzeldi gibi
    dispatch(initializeUserRequest());
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

    dispatch(initializeUserSuccess(payload));
    history.push("/");
  } catch (err) {
    console.log(err)
    dispatch(initializeUserFailure());
    dispatch(errorActions.setErrors(err.data,err.status));
  }
};
const login = (user) => async (dispatch) => {
 
  try {
    console.log(user);
    dispatch(loginRequest());
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
    dispatch(loginRequest());
    const response = await userService.loginWithGoogle(accessToken);
    console.log("response google action: ",response.access_token)
    setToken(response.access_token);
    dispatch(loginSuccess(response));
    history.push("/");
  } catch (err) {
    console.log(err.response);
    dispatch(loginFailure());
    dispatch(errorActions.setErrors(err.response));
  }
};

const register = (user) => async (dispatch) => {
  const { REACT_APP_LOCALACCESS } = process.env;
  try {
    dispatch(registerRequest());
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

export const authActions = {
  initializeUser,
  login,
  loginWithGoogle,
  register,
  loginRequest,
  loginSuccess,
  registerRequest,
  registerSuccess,
  registerFailure,
  initializeUserFailure,
  logout
};
