// IMPORT DEPENDENCIES
const { Sequelize } = require("sequelize");

const { DATABASE } = process.env;

// CONNECT DATABASE
const sequelize = new Sequelize(DATABASE);
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.err("Unable to connect to the database:", err);
}

module.exports = { Sequelize, sequelize };
