const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  console.log('Using JAWSDB_URL for database connection:', process.env.JAWSDB_URL);
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log('Using local database configuration');
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

module.exports = sequelize;
