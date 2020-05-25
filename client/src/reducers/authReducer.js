import { authConstants } from "../constants";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case (authConstants.LOGIN_REQUEST, authConstants.REGISTER_REQUEST):
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        user: null,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case (authConstants.LOGIN_FAILURE, authConstants.REGISTER_FAILURE):
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
