import {errorConstants} from '../constants';

export const setErrors = (err) => {

    return {
        type:errorConstants.SET_ERROR,
        payload:err
    }
}

export const clearErrors = () => {
    return {
        type:errorConstants.CLEAN_ERROR
    }
}

