
import { getMethod, postMethod, putMethod } from '../API';



const refreshToken = async () => {

 
  const response = await postMethod("auth/token",null,null);
  console.log("in service: "+ response)
  return response;

  
 
}

const loginWithGoogle = async (accessToken) => {
    const response = await postMethod("auth/google/token",null,{access_token:accessToken})
    console.log(response.data);
    return response.data;

}
const login = async (user) => {
 
};

const logout = async () => {
  
  const response = await getMethod("auth/logout",null);
  console.log(response);
  return response.data;
}

const register = async (user) => {
  const response = await postMethod("auth/register",null,user);
  return response;
 

};

const resetPassword = async (query,password) => {
  console.log("password:",password)
  const response = await putMethod("auth/resetpassword",`resetPasswordToken=${query}`,{password:password})
  console.log(response)
  return response;
}
export const userService = {
  login,
  loginWithGoogle,
  register,
  refreshToken,
  logout,
  resetPassword
};
