const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book");


const Library = sequelize.define("Library",{
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
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull:false, 
        defaultValue: false,
    }

});

Library.hasMany(Book, { foreignKey: 'library' });
Book.belongsTo(Library, { foreignKey: 'library' });


module.exports = Library;

