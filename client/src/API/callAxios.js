import client from '../services/client'
import { generateApiEndpoint} from "../utils";



const callAxios = async (method,endpoint,params=null,data=null) => {

  const newEndpoint = generateApiEndpoint(endpoint);
    return new Promise(function (resolve, reject) {
      const config = {
        method:method,
        url:`${newEndpoint}?${params}`,
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
