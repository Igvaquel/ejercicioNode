const { userProvider } = require("../providers");


const createUser = async(user) =>{
    return await userProvider.createUser(user);
};

const getUser = async(userId) =>{
    const user = await userProvider.getUser(userId);
    return user;
};


const getAllUsers = async(name,id) =>{
    const users = await userProvider.getAllUsers({name, id});
    return users ;
};

const updateUser = async(userId, user) => {
    const userFound = await userProvider.getUser(userId);
    if(userFound){
        const userUpdated = await userProvider.updateUser(userId, user);
        return userUpdated;
    }
    return null;
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser
};