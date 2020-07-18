import jwt from "jsonwebtoken";

import Cookies from "universal-cookie";
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
