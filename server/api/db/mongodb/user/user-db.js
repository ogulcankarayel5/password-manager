const User = require('../../../models/User');


const getById = async (id) => {


    const user = await User.findOne({_id:id})
    return user;


}

const findByEmail = async (email) => {
    const user = User.findOne({email});
    return user;
}


module.exports = userDb = {getById,findByEmail}