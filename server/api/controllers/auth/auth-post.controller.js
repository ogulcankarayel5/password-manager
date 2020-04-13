// import asyncHandler from "express-async-handler";
// import { registerService,loginService } from "../../services/auth/auth-post.service";
// import { sendJwt } from "../../helpers/authorization/tokenHelpers";
// import CustomError from "../../helpers/error/CustomError";
const asyncHandler = require("express-async-handler");
const { registerService,loginService } = require("../../services/auth/auth-post.service");
const {sendJwt} = require( "../../helpers/authorization/tokenHelpers");
const CustomError=require("../../helpers/error/CustomError");


// other service call (or same service, different function can go here)



const registerController = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const userInfo = {
    name,
    email,
    password,
  };
  console.log(name);

  const user = await registerService(userInfo);

  sendJwt(user,res);
});

const loginController = asyncHandler(async (req,res,next) => {
  const {email,password}=req.body;
  const userInfo = {email,password};

  const user = await loginService(userInfo);
  console.log(user);
  if(user===null){
    return next(new CustomError("Please check your credentials", 400))
  }
  sendJwt(user,res);


})

module.exports={ registerController,loginController };
//export { registerController,loginController };
