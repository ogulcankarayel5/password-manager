import { authConstants } from "../constants";
import {REQUEST,SUCCESS,ERROR} from '../utils/actionType';
const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST(authConstants.LOGIN),REQUEST(authConstants.REGISTER):
    
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        user: null,
      };
    case SUCCESS(authConstants.LOGIN):
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case ERROR(authConstants.LOGIN),ERROR(authConstants.REGISTER):
    
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
}
