const { userService } = require("../services");

const createUserController = async(req,res) => {
    try {
        const newUser  = await userService.createUser(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ action: "createUser", error: error.message});
    }
};

const getUserController = async (req,res) => {
    try {
        const user = await userService.getUser( req.params.userId );
        if(!user){
            res.status(404).json({action: "getUser", error: "User not found"});
        }else{
            res.json(user);
        }
        
    } catch (error) {
        res.status(500).json({ action: "getUser", error: error.message});
    }
};

const getAllUserController = async (req,res) => {
    try {
        const users = await userService.getAllUsers( req.params.name, req.params.userId );
        if(!users){
            res.status(404).json({action: "getAllUser", error: "Any User was found"});
        }else{
            res.json(users);
        }
        
    } catch (error) {
        res.status(500).json({ action: "getAllUser", error: error.message});
    }
};

const updateUserController = async(req,res) => {
    try {
        const user = await userService.updateUser( req.params.userId, req.body );
        if(!user){
            res.status(404).json({action: "updateUser", error: "User not found"});
        }else{
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ action: "updateUser", error: error.message});
        
    }
}

module.exports = {
    createUserController,
    getUserController,
    getAllUserController,
    updateUserController    
}