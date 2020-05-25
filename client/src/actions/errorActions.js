import {errorConstants} from '../constants';

const setErrors = (err,status) => {

    return {
        type:errorConstants.SET_ERROR,
        payload:err,
        status
    }
}

const clearErrors = () => {
    return {
        type:errorConstants.CLEAR_ERROR
    }
}


export const errorActions = {setErrors,clearErrors}
