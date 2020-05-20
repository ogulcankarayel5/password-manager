import { setAuthToken } from "../utils";
import { apiConstants } from "../constants";
import axios from "axios";

const API_AUTH = apiConstants.API_AUTH;

const login = async (user) => {
  const response = await axios.post(`${API_AUTH}/login`, user);
  console.log(response);
  return response;
};

const register = async (user) => {
  const response = await axios.post(`${API_AUTH}/register`, user);
  return response;
};
export const userService = {
  login,
  register,
};
