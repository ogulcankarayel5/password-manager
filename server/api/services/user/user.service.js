const userDb = require ('../../db/mongodb/user/user-db');


const getById = async (id) => {
    const user = await userDb.getById(id);
    if(user===null){
        return null;
    }
    return user;
}

module.exports = userService = {getById}