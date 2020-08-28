import jwt from "jsonwebtoken";

import { store } from "./";
import Cookies from "universal-cookie";
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

  const refreshToken = cookies.get(REACT_APP_REFRESHTOKEN);
  return { accessToken, refreshToken };
};

export const setToken = (accessToken) => {
  const { REACT_APP_LOCALACCESS } = process.env;
  localStorage.setItem(REACT_APP_LOCALACCESS, accessToken);
};

export const removeTokens = () => {
  const { REACT_APP_LOCALACCESS, REACT_APP_REFRESHTOKEN } = process.env;

  return new Promise(function (resolve, reject) {
    localStorage.removeItem(REACT_APP_LOCALACCESS);
    cookies.remove(REACT_APP_REFRESHTOKEN);
    resolve();
  }).catch((err) => {
    console.log(err);
    return Promise.reject(err);
  });

  //cookies.remove(REACT_APP_REFRESHTOKEN);
};

const { accessToken, refreshToken } = getTokens();

export const isTokensExpired = () => {
  let hasTokenExpired = accessToken ? isTokenExpired(accessToken) : true;
  let hasRefreshTokenExpired = refreshToken
    ? isTokenExpired(refreshToken)
    : true;
  return { hasTokenExpired, hasRefreshTokenExpired };
};

export const isTokensDefined = () => {
  if (
    (!accessToken && !refreshToken) ||
    (accessToken && !refreshToken) ||
    (accessToken === undefined && refreshToken === undefined) ||
    (accessToken !== undefined && refreshToken === undefined)
  ) {
    console.log("no token");

    store.dispatch(authActions.logout());

    return true;
    //return setBusy(false)
  } else {
    return false;
  }
};

export const isTokenValid = () => {
  if ((accessToken && refreshToken) || (!accessToken && refreshToken)) {
    console.log("initialize user in else");
    store.dispatch(authActions.initializeUser());
    return;
  }
};

export const setTokens = async () => {
  const { hasRefreshTokenExpired, hasTokenExpired } = isTokensExpired();
  if (hasTokenExpired && !hasRefreshTokenExpired) {
    try {
      console.log("hastokenexpired");
      const result = await userService.refreshToken(refreshToken);
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
