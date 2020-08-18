import { generateApiEndpoint} from "../utils";

import client from "./client";
import { getMethod } from "../API";



const getCurrentUser  = async () => {
    const response = await getMethod("account/");
   
    console.log(response.data)
    return response.data;
}

export const accountService = {
    getCurrentUser
}