// import jwt from "jsonwebtoken";
// import {
//   isTokenIncluded,
//   getAccessTokenFromHeader,
// } from "../../helpers/authorization/tokenHelpers";
// import CustomError from "../../helpers/error/CustomError";

const jwt = require("jsonwebtoken");
const tokenHelpers = require("../../helpers/authorization/tokenHelpers");
const CustomError = require("../../helpers/error/CustomError");
const redisAuthHelper = require("../../helpers/redis/auth");

const getAccessToRefreshToken = async (req, res, next) => {
  const { JWT_REFRESH_SECRET_KEY } = process.env;

  // const result = await redisAuthHelper.validateRefreshToken(
  //   req.body.refreshToken
  // );

  if (req.body.refreshToken) {
    jwt.verify(req.body.refreshToken,
      JWT_REFRESH_SECRET_KEY,
      async (err, decoded) => {
        if (err) {
          return next(
            new CustomError(
              "You are not authorized to access this route,you don't have a valid refresh token to create new access token ",
              401
            )
          );
        }

        if (decoded.id !== null) {
          console.log("decoded id:" ,decoded.id);
          req.userId = decoded.id;
          const result = await redisAuthHelper.validateRefreshToken(decoded.id);
          if (result === req.body.refreshToken) {
            return next();
          } else {
            return next(new CustomError("Invalid refresh token", 401));
          }
        } else {
          return next(
            new CustomError(
              "The user id  isn't releated with this refresh ",
              401
            )
          );
        }
      });
  } else {
    return next(new CustomError("Invalid refresh token", 401));
  }
};

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  const { authorization } = req.headers;
  console.log("in getaccesstoroute: " + authorization);
  if (!tokenHelpers.isTokenIncluded(authorization)) {
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }

  const accessToken = tokenHelpers.getAccessTokenFromHeader(authorization);
  console.log("middleware+" + accessToken);
  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log("errr: " + err);
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

module.exports = authMiddleware = { getAccessToRoute, getAccessToRefreshToken };
//export { getAccessToRoute };
