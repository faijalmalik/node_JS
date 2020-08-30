const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-collection', 'root', 'admin', {
  dialect: 'mysql',
  host: 'localhost',
  
});

module.exports = sequelize;
