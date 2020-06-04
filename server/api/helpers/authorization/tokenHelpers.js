const randToken = require('rand-token')
const redisAuthHelper = require("../redis/auth")


const prepareJwtToken = user => {

  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;
  const token = user.generateJwtFromUser(JWT_SECRET_KEY,JWT_EXPIRE);
  return token;


}
const prepareRefreshToken = (user) => {
 
  const {JWT_REFRESH_SECRET_KEY,JWT_REFRESH_EXPIRE} = process.env;
  const refreshToken = user.generateJwtFromUser(JWT_REFRESH_SECRET_KEY,JWT_REFRESH_EXPIRE)
  const refreshTokenUid = randToken.uid(256);
  
  redisAuthHelper.storeRefreshToken(refreshToken,refreshTokenUid);
  return refreshTokenUid;
}



const isTokenIncluded = (authorization) => {
  return authorization && authorization.startsWith('Bearer:');
  


}

const getAccessTokenFromHeader = authorization => {
  
  const access_token = authorization.split(":")[1];
  
  return access_token;
}

module.exports={isTokenIncluded,getAccessTokenFromHeader,prepareRefreshToken,prepareJwtToken };
//export { sendJwt,isTokenIncluded,getAccessTokenFromHeader };
