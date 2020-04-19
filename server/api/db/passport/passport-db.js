

const User= require('../../models/User');

const findByEmail = async (email) => {
    const user = User.findOne({email});
    return user;
}

const findById = async (id) =>{
    const user = User.findById(id);
    return user;
}


module.exports={findByEmail,findById}