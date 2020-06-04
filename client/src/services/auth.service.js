import { setAuthToken ,generateApiEndpoint} from "../utils";
import { apiConstants } from "../constants";
import axios from "axios";

const API_AUTH = apiConstants.API_AUTH;

const login = async (user) => {
  const endpoint = generateApiEndpoint("login")
  const response = await axios.post(endpoint, user);
  console.log(response);
  return response;
};

const register = async (user) => {
  const endpoint = generateApiEndpoint("register")
  const response = await axios.post(endpoint, user);
  
  return response;
};
export const userService = {
  login,
  register,
};
