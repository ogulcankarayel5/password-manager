// import jwt from "jsonwebtoken";
// import {
//   isTokenIncluded,
//   getAccessTokenFromHeader,
// } from "../../helpers/authorization/tokenHelpers";
// import CustomError from "../../helpers/error/CustomError";

const jwt = require("jsonwebtoken");
const {isTokenIncluded,getAccessTokenFromHeader} = require("../../helpers/authorization/tokenHelpers");
const CustomError = require("../../helpers/error/CustomError");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  const { authorization } = req.headers;
  console.log(authorization);
  if (!isTokenIncluded(authorization)) {
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }

  const accessToken = getAccessTokenFromHeader(authorization);
  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
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

module.exports={getAccessToRoute};
//export { getAccessToRoute };
