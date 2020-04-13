// import { registerDb,loginDb } from "../../db/mongodb/auth/auth-post.db";
// import CustomError from "../../helpers/error/CustomError";
// import { comparePassword } from "../../helpers/input/inputHelpers";
const {registerDb,loginDb} = require("../../db/mongodb/auth/auth-post.db");
const CustomError = require("../../helpers/error/CustomError");
const {comparePassword} = require("../../db/mongodb/auth/auth-post.db");
/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint , add them to this service
 */

const registerService = async (userInfo) => {
  return await registerDb(userInfo);
};

const loginService = async (userInfo) => {
  
  const user = await loginDb(userInfo);
  console.log(user);
  if(user===null){
    return null;
  }
  if(comparePassword(userInfo.password,user.password)){
    return user;
  }
 
  return null;
  
};

module.exports={registerService,loginService};
// export { registerService, loginService };
