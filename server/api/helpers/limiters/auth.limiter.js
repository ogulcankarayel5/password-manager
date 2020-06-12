const rateLimit = require("express-rate-limit");

const oneHour = 60*60*1000;

const refreshTokenLimiter = rateLimit({
    windowMs:oneHour,
    max:150,
    message:{
        status:429,
        error:'Too many refresh token attempts from this IP'
    }
})

const registerLimiter = rateLimit({
    windowMs:oneHour,
    max:200,
    message:{
        status:429,
        error:'Too many register attempts from this IP'
    }
})

const loginLimiter = rateLimit({
    windowMs:oneHour,
    max:200,
    message:{
        status:429,
        error:'Too many login attempts from this IP'
    }
})

module.exports = limiter = {refreshTokenLimiter,registerLimiter,loginLimiter};