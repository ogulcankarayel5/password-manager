//import CustomError from '../../helpers/error/CustomError';
const CustomError = require("../../helpers/error/CustomError");

const customErrorHandler = (err,req,res,next) => {
    let customError=err;

    res.status(customError.status || 500).json({
        success:false,
        message:customError.message
    });
}

module.exports=customErrorHandler;
//export default customErrorHandler;