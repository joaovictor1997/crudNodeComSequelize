const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Addres = db.define('Address', {

    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },
});

User.hasMany(Addres); //informar que o usuario tem varios endereços
Addres.belongsTo(User);  //informar que o endereco tem um usuario (varia da regra de negocio)

module.exports = Addres;