import {setAuthToken} from '../utils';
import axios from 'axios';

const login = async (user) => {

    try{
        
        const response = await axios.post("/api/auth/login",user);
        
        return response;
    }
    catch(err){
        return Promise.reject(err.response);
    }

}

export const userService = {
    login
}