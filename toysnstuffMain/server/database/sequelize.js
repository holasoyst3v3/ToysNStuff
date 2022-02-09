require ("dotenv").config()
const {URI} = process.env

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
 URI,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
