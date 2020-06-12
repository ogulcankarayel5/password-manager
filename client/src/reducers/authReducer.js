import { authConstants } from "../constants";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const {REACT_APP_LOCALACCESS,REACT_APP_REFRESHTOKEN}=process.env;

const initialState = {
  access_token: localStorage.getItem(REACT_APP_LOCALACCESS),
  refresh_token: cookies.get(REACT_APP_REFRESHTOKEN),
  loading: true,
  isAuthenticated: false,
  user: null,
};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.REGISTER_REQUEST:
    case authConstants.LOGIN_REQUEST:
    case authConstants.INITIALIZE_REQUEST:
     
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        loading: true,
        isAuthenticated: false,
        user: null,
      };
    case authConstants.REGISTER_SUCCESS:
    case authConstants.LOGIN_REQUEST:
    case authConstants.INITIALIZE_SUCCESS:
     
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        user: action.payload.data,
      };
    case authConstants.INITIALIZE_ERROR:
    case authConstants.LOGIN_ERROR:
    case authConstants.REGISTER_ERROR:
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        loading: false,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
}
