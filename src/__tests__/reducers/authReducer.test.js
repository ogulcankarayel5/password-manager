import {authConstants} from '../../constants'
import {authReducer} from '../../reducers/authReducer'

describe("Auth Reducer",() => {

    it("Should return initial state",() => {
        const initialState = {
            loading: false, 
            isAuthenticated: false,
            user: null,
          };
        const newState=authReducer(undefined,{});
        expect(newState).toEqual(initialState);
    })

    it("Should return new state if receiving type",() => {

        const user={username:"ogulcan"}
        const newState=authReducer(undefined,{
            type:authConstants.LOGIN_SUCCESS,
            payload:user
        })
       
        expect(newState.user).toEqual(user,{isAuthenticated:true});
    })

})