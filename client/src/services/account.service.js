import { generateApiEndpoint} from "../utils";

import client from "./client";



const getCurrentUser  = async () => {

    const endpoint = generateApiEndpoint("account");
    const response = await client.get(endpoint);
    console.log(response.data)
    return response.data;
}

export const accountService = {
    getCurrentUser
}