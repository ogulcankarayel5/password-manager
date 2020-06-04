const {redisClient} = require("./client");

const REFRESH_TOKEN_KEY="refresh_tokens";

const storeRefreshToken = async (refreshToken,refreshTokenUid) => {

    const result = await redisClient.hset(
        REFRESH_TOKEN_KEY,
        refreshTokenUid,
        refreshToken
    )

    return result;
}   

const validateRefreshToken = async (refreshToken) => {
    const result = await redisClient.hget(REFRESH_TOKEN_KEY,refreshToken)
    return result;
}

const inValidateRefreshToken = async (refreshToken) => {
    const result = await redisClient.hdel(REFRESH_TOKEN_KEY,refreshToken);
}

module.exports = redisAuthHelper  ={
    storeRefreshToken,
    validateRefreshToken,
    inValidateRefreshToken
}