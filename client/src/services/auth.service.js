import { setAuthToken ,generateApiEndpoint} from "../utils";

import client from "./client";




const refreshToken = async(refreshToken) => {

  const endpoint = generateApiEndpoint("auth/token");
 console.log(endpoint)
  console.log("in service: "+ refreshToken)
  const response = await client.post(endpoint,{refreshToken})
  
  return response.data;

}
const login = async (user) => {
  const endpoint = generateApiEndpoint("auth/login")
  const response = await client.post(endpoint, user);
  console.log(response);
  return response.data;
};

const register = async (user) => {
  const endpoint = generateApiEndpoint("auth/register")
  const response = await client.post(endpoint, user);
  console.log("register service response : "+ response.data)
  
  return response.data;
};
export const userService = {
  login,
  register,
  refreshToken
};
