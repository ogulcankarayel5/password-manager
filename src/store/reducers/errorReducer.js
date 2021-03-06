import {errorConstants} from '../../constants';


const initialState = {
    status:null,
    
    errors:[]
}
export function errorReducer(state=initialState,action){

    switch(action.type){

        case errorConstants.SET_ERROR:
           
            return {
                ...state,
                errors:[...state.errors,action.payload],
                status:action.status,


            }
        case errorConstants.CLEAR_ERROR:
            return {
                ...state,
                errors:[],
                status:null
            }
        default:
            return state;
    }
}