import axios from "axios";
import { postMethod } from "../API";
import { setToken, store } from "../utils";
import { authActions } from "./../store/actions/authActions";

const { REACT_APP_LOCALACCESS, REACT_APP_REACT_ENV } = process.env;

const axiosInstance = axios.create({
  baseURL:
    REACT_APP_REACT_ENV === "development"
      ? "http://localhost:5000/api"
      : "https://luckypassword.me/api",
});
axiosInstance.defaults.withCredentials = true;
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

const isRefreshingControl = async (originalRequest) => {
  return new Promise((resolve, reject) => {
    console.log("isRefreshing2");
    failedQueue.push({ resolve, reject });
  })
    .then((accessToken) => {
      console.log("access");
      originalRequest.headers["Authorization"] = "Bearer:" + accessToken;
      console.log("access: " + accessToken);
      return axiosInstance(originalRequest);
    })
    .catch((err) => {
      console.log("err");
      return Promise.reject(err);
    });
};

const refreshTokenInInterceptor = async (originalRequest,error) => {
  return new Promise((resolve, reject) => {
    console.log("in promise");
    postMethod("auth/token", null, null)
      .then((result) => {
        console.log("result:", result);

        if (result.data.access_token !== undefined) {
          console.log("token ");
          setToken(result.data.access_token);
          axiosInstance.defaults.headers.common["Authorization"] =
            "Bearer:" + result.data.access_token;
          originalRequest.headers["Authorization"] =
            "Bearer:" + result.data.access_token;

          processQueue(null, result.data.access_token);
          resolve(axiosInstance(originalRequest));
        } else {
          console.log("err: ", error);
          reject(error);
        }
      })
      .catch((err) => {
        console.log("err: ", err.response);
        processQueue(err, null);
        reject(err);
      })
      .then(() => {
        isRefreshing = false;
      });
    //TODO:Eğer refresh tokenın da süresi dolmuşsa burda history.push oluyor. ama diğer tarafı bozuyor
  });
};

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const { status, data } = error.response;
    console.log("status: ",status)
    console.log("data", data)
    const originalRequest = error.config;
    console.log(originalRequest);
    if (originalRequest.url === "auth/logout?null") {
      console.log("logout in interceptor");
      return error.response;
    }

    if (
      error.response.status === 401 &&
      originalRequest.url == "auth/token?null"
    ) {
      console.log("unauthorized");

      store.dispatch(authActions.logout());
      return error.response;
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        console.log("isRefreshing");
        await isRefreshingControl(originalRequest);
      }
      console.log("no refreshing");
      originalRequest._retry = true;
      console.log(originalRequest._retry);
      isRefreshing = true;

      await refreshTokenInInterceptor(originalRequest,error);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
