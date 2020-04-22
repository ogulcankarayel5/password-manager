import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setAuthToken = (token) => {
    
    const tokenCookie = cookies.get("access_token");
    console.log(tokenCookie);
    if(token){
        axios.defaults.headers.common["Authorization"]=`Bearer:${token}`
    }
    else{
        delete axios.defaults.headers.common["Authorization"]
    }
}