const asyncHandler = require("express-async-handler");

const {sendJwt} = require( "../../helpers/authorization/tokenHelpers");




const googleAuthController = asyncHandler(async (req,res,next) => {

    const {user}=req;
    
    sendJwt(user,res);


})


module.exports={googleAuthController};