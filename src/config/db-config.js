const {Sequelize} = require("sequelize");

//    instancia   !=  clase
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage:"./database.sqlite",
});

const initializeDB = async () => {
    try {
        await sequelize.authenticate(); //Establecemos la conexion con la base de datos
        console.log("Conexion a la base de datos establecida");
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log("Hubo un error al inicializar la base de datos", error);
    }
};

module.exports = {
    sequelize,
    initializeDB
};