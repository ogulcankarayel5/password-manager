import axios from 'axios';
import {history} from '../utils'
import Cookies from 'universal-cookie';
import {generateApiEndpoint} from '../utils'
const cookies = new Cookies();
const {REACT_APP_LOCALACCESS} = process.env;

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, accessToken = null) => {
  
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(accessToken);
    }
  });

  failedQueue = [];
};

axios.interceptors.request.use(
    async config => {
        const accessToken = localStorage.getItem(REACT_APP_LOCALACCESS);
        
        if(accessToken){
            config.headers['Authorization']=`Bearer:${accessToken}`
        }
        return config;
    }
)

axios.interceptors.response.use(
    async response => {
        return response;
    },
    async error => {
        const {REACT_APP_LOCALACCESS,REACT_APP_REFRESHTOKEN} = process.env
        const {status,data} = error.response;
        console.log(error.config._retry);
        const originalRequest = error.config
        console.log(status);
        console.log(data);
        const refreshToken = cookies.get(REACT_APP_REFRESHTOKEN)
      
        if(refreshToken){
        
            if (error.response.status === 401 && !originalRequest._retry) {

               
                
                if (isRefreshing) {
                 
                  return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                  })
                    .then(accessToken => {
                      originalRequest.headers['Authorization'] =
                        'Bearer:' + accessToken;
                        console.log("access: "+accessToken)
                      return axios(originalRequest);
                    })
                    .catch(err => {
                      
                      return err;
                    });
                }
               
                
                originalRequest._retry = true;
                console.log(originalRequest._retry)
                isRefreshing = true;
                const endpoint = generateApiEndpoint('auth/token');
                
                return new Promise((resolve, reject) => {
                  axios
                    .post(endpoint, { refreshToken })
                    .then(result => {
                      
                      localStorage.setItem(
                        REACT_APP_LOCALACCESS,
                        result.data.access_token
                      );
                      
        
                      axios.defaults.headers.common['Authorization'] =
                        'Bearer:' + result.data.access_token;
                      originalRequest.headers['Authorization'] =
                        'Bearer:' + result.data.access_token;
        
                      processQueue(null, result.data.access_token);
                      resolve(axios(originalRequest));
                    })
                    .catch(err => {
                      
                      
                      processQueue(err, null);
                      reject(err);
                    })
                    .then(() => {
                      
                      isRefreshing = false;
                     
                    });
                    //TODO:Eğer refresh tokenın da süresi dolmuşsa burda history.push oluyor. ama diğer tarafı bozuyor
                });
               
              }
              history.push("/unauthorized")
        }
        console.log("unauthroized")
        
        
        return Promise.reject(error);
    }
)
export default axios;