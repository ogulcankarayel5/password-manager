//import User from '../../../models/User';

const User = require('../../../models/User');

const register = async (userInfo) => {

    
    const user= await User.create(userInfo);
    return user;
   
}
const login = async (userInfo) => {
    const {email}=userInfo;
    return await User.findOne({email}).select("+password");
}

module.exports=authDb = {register,login};
//export {registerDb,loginDb};