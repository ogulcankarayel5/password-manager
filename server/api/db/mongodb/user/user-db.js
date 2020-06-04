const User = require('../../../models/User');


const getById = async (id) => {


    const user = await User.findById(id);
    return user;


}

module.exports = userDb = {getById}