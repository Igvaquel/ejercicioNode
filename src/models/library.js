const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book");


const Library = sequelize.define("Librarys",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull:false, 
        unique:true, 
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull:false,
    },

});

Library.hasMany(Book);
Book.belongsTo(Library)

module.exports = Library;