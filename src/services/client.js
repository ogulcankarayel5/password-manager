import axios from "axios";
import { postMethod } from "../API";
import { setToken, store } from "../utils";
import { authActions } from './../store/actions/authActions';


const { REACT_APP_LOCALACCESS,REACT_APP_REACT_ENV } = process.env;


const axiosInstance = axios.create({ baseURL:REACT_APP_REACT_ENV === "development" ? "http://localhost:5000/api" : "https://luckypassword.me/api"  });
axiosInstance.defaults.withCredentials = true
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, accessToken = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(accessToken);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem(REACT_APP_LOCALACCESS);

  if (accessToken) {
    config.headers["Authorization"] = `Bearer:${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
   
    const { status, data } = error.response;
    // console.log(error.config._retry);
    const originalRequest = error.config;
    // console.log(status);
    // console.log(data);
    //const refreshToken = cookies.get(REACT_APP_REFRESHTOKEN);
   
 
      if (error.response.status===401 && data.message === "Invalid refresh token") {
        console.log("unauthorized");
       store.dispatch(authActions.logout());
        return error.response;
      }
      
      if(error.response.status === 401 && data.message === "You are not authorized to access this route,you don't have a valid refresh token to create new access token "){
        console.log("invalid refresh token");
        console.log(error.response)
        store.dispatch(authActions.logout());
        return error.response;
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          console.log("isRefreshing");
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((accessToken) => {
              originalRequest.headers["Authorization"] =
                "Bearer:" + accessToken;
              console.log("access: " + accessToken);
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log("err");
              return Promise.reject(err);
            });
        }
        console.log("no refreshing");

        originalRequest._retry = true;
        console.log(originalRequest._retry);
        isRefreshing = true;
        //const endpoint = generateApiEndpoint("auth/token");

        return new Promise((resolve, reject) => {

         
          // refresh tokenla oynayınca hata mesajı undefined
         
          postMethod("auth/token",null,null).then((result) => {
            console.log("result:",result)

              setToken(result.data.access_token);
              
              axiosInstance.defaults.headers.common["Authorization"] =
                "Bearer:" + result.data.access_token;
              originalRequest.headers["Authorization"] =
                "Bearer:" + result.data.access_token;

              processQueue(null, result.data.access_token);
              resolve(axiosInstance(originalRequest));
            })
            .catch((err) => {

              console.log(err.response)
              processQueue(err, null);
              reject(err);
            })
            .then(() => {
              isRefreshing = false;
            });
          //TODO:Eğer refresh tokenın da süresi dolmuşsa burda history.push oluyor. ama diğer tarafı bozuyor
        });
      }

      console.log("unauthroized");
     
  
    console.log("unauthroized");

    return Promise.reject(error);
  }
);
export default axiosInstance;