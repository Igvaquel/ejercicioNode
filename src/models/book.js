const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Book = sequelize.define("Books",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true, 
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull:false, 
    },
    autor: {
        type: DataTypes.STRING,
        allowNull:false, 
    },
    year: {
        type: DataTypes.STRING,
        allowNull:false, 
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    deleted: {
        type: DataTypes.STRING,
        allowNull:false, 
        defaultValue: false,
    }

});


module.exports = Book;