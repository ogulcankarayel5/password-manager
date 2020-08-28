const {redisClient} = require("./client");

const REFRESH_TOKEN_KEY="refresh_tokens";

const storeRefreshToken = async (refreshToken,userId) => {
    //daha önceki tokenları temizliyoruz ki yeni üretilen bir refresh token yerine,eski bir token kullanılarak yeni bir access token üretilemesin. // bunu kaldırdım mantıksız
    //redisClient.flushall();
    const res = await inValidateRefreshToken(JSON.stringify(userId));
    console.log("res: "+res);
    //user id keyi ile daha önceki refresh tokenlarını silmeliyim ki eski bir refresh tokenı expire time geçmemiş olmasına rağmen logout yaptıktan sonra kullanamasın 
    const result = await redisClient.set(
        
        JSON.stringify(userId),
        refreshToken,
        'EX',
        7*24*60*6000
    )

    return result;
}   

const validateRefreshToken = async (userId) => {
    console.log("refreshtokeninredis: "+ userId);
    const result = await redisClient.get(JSON.stringify(userId))
    console.log("validatetoken: "+result)
    return result;
}

const inValidateRefreshToken = async (refreshToken) => {
    const result = await redisClient.hdel(REFRESH_TOKEN_KEY,refreshToken);
    return result;
}

const deleteAllTokens = async () => {
 const result = await redisClient.flushall();
 return result; 
}



module.exports = redisAuthHelper  ={
    storeRefreshToken,
    validateRefreshToken,
    inValidateRefreshToken,
    deleteAllTokens
}