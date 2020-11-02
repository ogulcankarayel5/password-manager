import Cookies from 'universal-cookie';
import { authConstants } from "../../constants";
const cookies = new Cookies();

const {REACT_APP_LOCALACCESS,REACT_APP_REFRESHTOKEN}=process.env;

const initialState = {
  access_token: localStorage.getItem(REACT_APP_LOCALACCESS),

  loading: true,
  isAuthenticated: false,
  user: null,
};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.REQUEST:
   
     
      return {
        ...state,
       
       
        loading: true,
        
      };
    case authConstants.REGISTER_SUCCESS:
    case authConstants.LOGIN_SUCCESS:
    case authConstants.INITIALIZE_SUCCESS:
    case authConstants.REFRESH_TOKEN_SUCCESS:
     
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        access_token: action.payload.access_token,
       
        user: action.payload.data,
      };
    case authConstants.INITIALIZE_ERROR:
    case authConstants.LOGIN_ERROR:
    case authConstants.REGISTER_ERROR:
    case authConstants.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        access_token: null,
       
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case authConstants.RESET_PASSWORD_SUCCESS:
    case authConstants.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading:false
      };

    default:
      return state;
  }
}
