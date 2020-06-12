// import jwt from "jsonwebtoken";
// import {
//   isTokenIncluded,
//   getAccessTokenFromHeader,
// } from "../../helpers/authorization/tokenHelpers";
// import CustomError from "../../helpers/error/CustomError";

const jwt = require("jsonwebtoken");
const tokenHelpers = require("../../helpers/authorization/tokenHelpers");
const CustomError = require("../../helpers/error/CustomError");
const redisAuthHelper = require("../../helpers/redis/auth")


const getAccessToRefreshToken = async (req,res,next) => {
  const { JWT_REFRESH_SECRET_KEY } = process.env;
 
  const result = await redisAuthHelper.validateRefreshToken(
    req.body.refreshToken
  );

  if(result){
    jwt.verify(result, JWT_REFRESH_SECRET_KEY, async (err, decoded) => {
      if (err) {
        return next(
          new CustomError("You are not authorized to access this route,you don't have refresh token to create new access token ", 401)
        );
      }

     
      req.userId = decoded.id;
      return next();
     
  
     
    });

  }
  else {
    return next(new CustomError("Invalid refresh token", 401));
  }
  


  

}

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  const { authorization } = req.headers;
  console.log("in getaccesstoroute: "+authorization);
  if (!tokenHelpers.isTokenIncluded(authorization)) {
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }

  const accessToken = tokenHelpers.getAccessTokenFromHeader(authorization);
  console.log("middleware+" +accessToken)
  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log("errr: "+err)
      return next(
        new CustomError("You are not authorized to access this route", 401)
      );
    }

    req.user = {
      id: decoded.id,
      name: decoded.name,
    };
    return next();
  });
};

module.exports=authMiddleware = {getAccessToRoute,getAccessToRefreshToken};
//export { getAccessToRoute };
