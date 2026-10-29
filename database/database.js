const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('relationshpAppDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});





module.exports = sequelize;