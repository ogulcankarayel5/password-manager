//import User from '../../../models/User';

const User = require('../../../models/User');

const registerDb = async (userInfo) => {

    
    return await User.create(userInfo);

    
}

const loginDb = async (userInfo) => {
    const {email}=userInfo;
    return await User.findOne({email}).select("+password");
}

module.exports={registerDb,loginDb};
//export {registerDb,loginDb};