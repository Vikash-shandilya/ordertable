const Sequelize = require("sequelize");

const sequelize = new Sequelize("tableorder", "root", "localhost", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
