// import asyncHandler from "express-async-handler";
// import { registerService,loginService } from "../../services/auth/auth-post.service";
// import { sendJwt } from "../../helpers/authorization/tokenHelpers";
// import CustomError from "../../helpers/error/CustomError";
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const authService = require("../../services/auth/auth-post.service");
const userService = require("../../services/user/user.service");
const {
  prepareJwtToken,
  prepareRefreshToken,
} = require("../../helpers/authorization/tokenHelpers");
const CustomError = require("../../helpers/error/CustomError");

// other service call (or same service, different function can go here)

const register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const { JWT_COOKIE, NODE_ENV } = process.env;
  const userInfo = {
    name,
    email,
    password,
  };
  console.log(name);

  const user = await authService.register(userInfo);

  const access_token = prepareJwtToken(user);
  console.log(access_token);
  const refresh_token = prepareRefreshToken(user);
  console.log(refresh_token);

  return res
    .status(200)
    .cookie("access_token", access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 60),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      access_token: access_token,
      refresh_token: refresh_token,
      data: {
        name: user.name,
        email: user.email,
      },
    });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const userInfo = { email, password };

  const user = await authService.loginService(userInfo);
  console.log(user);
  if (user === null) {
    return next(new CustomError("Please check your credentials", 400));
  }
  sendJwt(user, res);
});

const refreshToken = asyncHandler(async (req, res, next) => {
 
  //body kısmında yollanan refresh token redis dbde kontrol ediyoruz.
  const result = await redisAuthHelper.validateRefreshToken(
    req.body.refreshToken
  );
  
  const { JWT_REFRESH_SECRET_KEY,JWT_COOKIE,NODE_ENV } = process.env;
  // If refresh token is valid, send a new accessToken
  // and refreshToken to user with this response
  if (result) {
    //body kısmında gelen uid değerine karşılık gelen result değeri db de jwt şeklinde saklanmaktadır. Bu yüzden expire olmuş mu kontrol ediyoruz
    jwt.verify(result, JWT_REFRESH_SECRET_KEY, async (err, decoded) => {
      if (err) {
        return next(
          new CustomError("You are not authorized to access this route", 401)
        );
      }


      userId = decoded.id;
      const user = await userService.getById(userId);
      console.log(user)
      if (user === null) {
        return next(new CustomError("Böyle bir kullanıcıyla alakalı bilgi yok",404))
      }
      const access_token = prepareJwtToken(user);

      const refresh_token = prepareRefreshToken(user);
  
      //Send back the token to the user
      //cookie içine refresh tokenı koyup 2 tokenıda response içinde gönderiyoruz. Client tarafında access tokenı localstorage içine kaydedicez
      // bu controller sadece gelen refresh token ile yeni bir access token üretmek içindir
      return res
        .status(200)
        .cookie("refresh_token", refresh_token, {
          httpOnly: true,
          expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 7 * 24 * 1000),
          secure: NODE_ENV === "development" ? false : true,
        })
        .json({
          success: true,
          access_token: access_token,
          refresh_token: refresh_token,
          data: {
            name: user.name,
            email: user.email,
          },
        });
    });

    
   
  }
  // Otherwise return 401
  else {
    return next(new CustomError("Invalid refresh token", 401));
  }
});

module.exports = authController = { register, login, refreshToken };
//export { registerController,loginController };
