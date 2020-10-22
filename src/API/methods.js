import callAxios from './callAxios';



export const getMethod = (endpoint,params=null) => {
  //should be return await ?
  return callAxios("get",endpoint,params)
}
export const postMethod = (endpoint,params=null,data) => {
  return callAxios("post",endpoint,params,data)
}