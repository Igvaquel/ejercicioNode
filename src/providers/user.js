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


const getAllUsers = async(options) => {
    try {
      const users = await User.findAll({
        where: {
            name: options.name
        },
        include: {
            all: true
        }
      });
      return users;
    } catch (error) {
      console.error("Error when fetching User", error);
      throw error;
    }
};

const updateUser = async(userId, user) => {
    try {
        const userFound = await User.findByPk(userId, {include: {all: true}});
        if(userFound) {
            await userFound.update(user);
            return userFound;
        }else{
            throw new Error("User not found");
        }           
    } catch (error) {
        console.error("Error when updating User", error);
      throw error;
    }
};



module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser
};