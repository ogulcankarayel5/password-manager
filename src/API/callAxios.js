import client from '../services/client';



const callAxios = async (method,endpoint,params=null,data=null) => {

 
    return new Promise(function (resolve, reject) {
      const config = {
        method:method,
        url:`${endpoint}?${params}`,
        data:data
      }
      client(config)
            .then(response =>{
              console.log(response) 
              resolve(response)
            })
            .catch(error => {
              console.log(error.response)
              reject(error.response)
              
            });
    });
}

export default callAxios;
