const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root','docker', {
    host: 'localhost',
    dialect: 'mysql'
})

/*
try {
    sequelize.authenticate();
    console.log('conectado');
} catch (error) {
    console.log(error);
}
*/

module.exports = sequelize;