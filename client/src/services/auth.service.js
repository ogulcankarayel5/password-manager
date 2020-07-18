
import {postMethod} from '../API'


const refreshToken = async(refreshToken) => {

  const response = await postMethod("auth/token",refreshToken);
  console.log("in service: "+ response)
  return response;

  
 
}

const loginWithGoogle = async (accessToken) => {
    const response = await postMethod("auth/google/token",null,{access_token:accessToken})
    console.log(response);
    return response;

}
const login = async (user) => {
 
};

const register = async (user) => {
  const response = await postMethod("auth/register",null,user);
  return response;
  console.log(response)

};
export const userService = {
  login,
  loginWithGoogle,
  register,
  refreshToken
};
