// import asyncHandler from "express-async-handler";
// import { registerService,loginService } from "../../services/auth/auth-post.service";
// import { sendJwt } from "../../helpers/authorization/tokenHelpers";
// import CustomError from "../../helpers/error/CustomError";

const asyncHandler = require("express-async-handler");
const authService = require("../../services/auth/auth-post.service");
const userService = require("../../services/user/user.service");

const tokenHelpers = require("../../helpers/authorization/tokenHelpers");
const CustomError = require("../../helpers/error/CustomError");

// other service call (or same service, different function can go here)

const register = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const userInfo = {
    name,
    email,
    password,
  };

  const user = await authService.register(userInfo);
  tokenHelpers.responseUserWithTokens(res, user);
});

const signInWithGoogle = asyncHandler(async (req, res, next) => {
  //console.log(req)
  
  const { user } = req;
  if (user === null) {
    return next(new CustomError("Kullanıcı ilişkilendirilemedi", 400));
  }

  tokenHelpers.responseUserWithTokens(res, user);
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const userInfo = { email, password };

  const user = await authService.loginService(userInfo);
  console.log(user);
  if (user === null) {
    return next(new CustomError("Please check your credentials", 400));
  }
  tokenHelpers.responseUserWithTokens(res, user);
});

const refreshToken = asyncHandler(async (req, res, next) => {
  console.log("refresh controller:" + req.body.refreshToken);
  //body kısmında yollanan refresh token redis dbde kontrol ediyoruz.

  // If refresh token is valid, send a new accessToken
  // and refreshToken to user with this response
  const {userId} = req;
  const user = await userService.getById(userId);
  console.log("user:" + user);
  if (user === null) {
    return next(
      new CustomError("Böyle bir kullanıcıyla alakalı bilgi yok", 404)
    );
  }
   //Send back the token to the user
      //cookie içine refresh tokenı koyup 2 tokenıda response içinde gönderiyoruz. Client tarafında access tokenı localstorage içine kaydedicez
      // bu controller sadece gelen refresh token ile yeni bir access token üretmek içindir
     
  tokenHelpers.responseUserWithTokens(res,user);
});

module.exports = authController = {
  register,
  login,
  refreshToken,
  signInWithGoogle,
};
//export { registerController,loginController };
