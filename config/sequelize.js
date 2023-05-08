const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_DB, process.env.PASSWORD_DB,{
    socketPath: process.env.SOCKET_PATH,
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

module.exports = { sequelize };