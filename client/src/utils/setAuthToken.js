import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setAuthToken = () => {
    
    const tokenCookie = cookies.get("access_token");
    console.log(tokenCookie);
    if(tokenCookie){
        axios.defaults.headers.common["Authorization"]=`Bearer:${tokenCookie}`
    }
    else{
        delete axios.defaults.headers.common["Authorization"]
    }
}