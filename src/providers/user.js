const { User } = require('../models');
const { Op } = require('sequelize');


//CRUD usuario


const createUser = async(user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        console.error("Error when creating User", error);
        throw error;
    }
};

const getUser = async(userId) => {
    try {
        const userFound = await User.findByPk(userId, {include: { all: true }});
        return userFound;
    } catch (error) {
        console.error("Error when feching User", error);
        throw error;
    }
};


const validateUser = async(options) => {
    try {
        const user = await User.findAll({
            where: { 
                name: options.name, 
                password: options.password
            } 
        });
        if(user.length !== 0) {
            return user;
        }
        return false;
    } catch (error) {
        console.error("Error when validating", error);
        return false;
    }
};


module.exports = {
    createUser,
    getUser,
    validateUser,
    
};