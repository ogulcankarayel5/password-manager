import jwt from "jsonwebtoken";
import Cookies from "universal-cookie";
import { store } from "./";
import { userService } from "./../services/auth.service";
import { authActions } from "./../store/actions/authActions";


const cookies = new Cookies();

export const isTokenExpired = (accessToken) => {
  const decodedToken = jwt.decode(accessToken);
  if (decodedToken) {
    console.log(decodedToken + "      " + Date.now() / 1000);
    console.log(decodedToken.exp);
    console.log(Date.now() / 1000);
    return decodedToken.exp < Date.now() / 1000;
  }
  return true;
};

export const getTokens = () => {
  const { REACT_APP_LOCALACCESS, REACT_APP_REFRESHTOKEN } = process.env;
  const accessToken = localStorage.getItem(REACT_APP_LOCALACCESS);

  //const refreshToken = cookies.get(REACT_APP_REFRESHTOKEN);
  return { accessToken };
};

export const setToken = (accessToken) => {
  const { REACT_APP_LOCALACCESS } = process.env;
  localStorage.setItem(REACT_APP_LOCALACCESS, accessToken);
};

export const removeTokens = () => {
  const { REACT_APP_LOCALACCESS } = process.env;

  return new Promise(function (resolve, reject) {
    localStorage.removeItem(REACT_APP_LOCALACCESS);
   
    resolve();
  }).catch((err) => {
    console.log(err);
    return Promise.reject(err);
  });

  //cookies.remove(REACT_APP_REFRESHTOKEN);
};

const { accessToken } = getTokens();

export const isTokensExpired = () => {
  let hasTokenExpired = accessToken ? isTokenExpired(accessToken) : true;
  
  return { hasTokenExpired};
};

export const isTokensDefined = () => {

  if(!accessToken && accessToken===undefined) {
    console.log("no token");

    store.dispatch(authActions.logout());

    return true;
    
  } else {
    return false;
  }
};

export const isTokenValid = () => {
  if (accessToken ) {
    console.log("initialize user in else");
    store.dispatch(authActions.initializeUser());
    return;
  }
};

export const setTokens = async () => {
  const {  hasTokenExpired } = isTokensExpired();
  if (hasTokenExpired) {
    try {
      console.log("hastokenexpired");
      const result = await userService.refreshToken();
      //burada localstorage atmazsak register olduğu zaman ki tokenı kullanıyor ve 401 hatası oluyor

      console.log("access: " + result.data.access_token);

      store.dispatch(authActions.initializeUser());
      console.log("initialize");
      return;
    } catch (err) {
      console.log(err);

      store.dispatch(authActions.logout());
      //history.push("/unauthorized");
      return;
    }
  } else {
    isTokenValid();
  }
};
