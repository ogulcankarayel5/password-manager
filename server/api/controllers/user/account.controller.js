const userService = require("../../services/user/user.service")
const asyncHandler = require("express-async-handler");
const CustomError = require("../../helpers/error/CustomError");

const getCurrentUser = asyncHandler(async (req,res,next) => {

    const user = await userService.getById(req.user.id);
    if(user===null){
        return next(new CustomError("User is not found",404))
    }

    return res.status(200).json(user);

})

module.exports = accountController = {getCurrentUser}








