import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userService } from "../services";
import { authActions, errorActions } from "../store/actions";

import { isTokenExpired, setAuthToken, getTokens, history } from "../utils";

export default function useAuth() {

  const dispatch = useDispatch();
  useEffect(() => {
    // burada dispatch yapılabilir initializerequest ile ve tek bir loading ile iş çözülebilir
    const { accessToken, refreshToken } = getTokens();
    console.log("refresh: ", refreshToken);
    console.log("access: ", accessToken);

    if (
      !accessToken ||
      !refreshToken ||
      accessToken === undefined ||
      refreshToken === undefined
    ) {
      console.log("no token");

      dispatch(authActions.logout());
      history.push("/");
      return;
      //return setBusy(false)
    }

    let hasTokenExpired = accessToken ? isTokenExpired(accessToken) : true;
    let hasRefreshTokenExpired = refreshToken
      ? isTokenExpired(refreshToken)
      : true;
    console.log(hasTokenExpired);

    if (hasTokenExpired && !hasRefreshTokenExpired) {
      const setTokens = async () => {
        try {
          console.log("hastokenexpired");
          const result = await userService.refreshToken(refreshToken);
          //burada localstorage atmazsak register olduğu zaman ki tokenı kullanıyor ve 401 hatası oluyor

          console.log("access: " + result.data.access_token);

          dispatch(authActions.initializeUser());
          console.log("initialize");
          return;
        } catch (err) {
          console.log(err);

          dispatch(authActions.logout());
          //history.push("/unauthorized");
          return;
        }
      };
      setTokens();
    } else {
      if (accessToken && refreshToken) {
        console.log("initialize user in else");
        dispatch(authActions.initializeUser());
        return;
      }
    }
  }, []);
  return {}
}
