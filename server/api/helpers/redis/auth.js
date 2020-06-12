const {redisClient} = require("./client");

const REFRESH_TOKEN_KEY="refresh_tokens";

const storeRefreshToken = async (refreshToken,refreshTokenUid) => {
    //daha önceki tokenları temizliyoruz ki yeni üretilen bir refresh token yerine,eski bir token kullanılarak yeni bir access token üretilemesin
    redisClient.flushall();
    
    const result = await redisClient.hset(
        REFRESH_TOKEN_KEY,
        refreshTokenUid,
        refreshToken
    )

    return result;
}   

const validateRefreshToken = async (refreshToken) => {
    console.log("refreshtokeninredis: "+ refreshToken);
    const result = await redisClient.hget(REFRESH_TOKEN_KEY,refreshToken)
    console.log("validatetoken: "+result)
    return result;
}

const inValidateRefreshToken = async (refreshToken) => {
    const result = await redisClient.hdel(REFRESH_TOKEN_KEY,refreshToken);
    return result;
}



module.exports = redisAuthHelper  ={
    storeRefreshToken,
    validateRefreshToken,
    inValidateRefreshToken
}