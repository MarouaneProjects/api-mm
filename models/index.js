const { Sequelize, DataTypes } = require("sequelize");

// Init DB
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
}
);


// Test DB
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    testConnection();
  }
}
testConnection();

// Import Sequelize, DB, Models
const db = {};

db.users = require('../models/users')(sequelize, DataTypes);






// // Sync DB
// db.sequelize.sync({ alter: { drop: false } })
//   .then(() => {
//     console.log('yes, re-sync')
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })

module.exports = { db, Sequelize };