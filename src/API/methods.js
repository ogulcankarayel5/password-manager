import callAxios from './callAxios';



export const getMethod =async (endpoint,params=null) => {
  //should be return await ?
  return callAxios("get",endpoint,params)
}
export const postMethod = async (endpoint,params=null,data) => {
  return callAxios("post",endpoint,params,data)
}

export const putMethod = async (endpoint,params=null,data) => {
  return callAxios("put",endpoint,params,data)
}