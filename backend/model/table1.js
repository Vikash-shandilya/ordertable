const sequelize = require("../data/database");
const Sequelize = require("sequelize");

const expenses = sequelize.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  tableno: {
    type: Sequelize.ENUM("table1", "table2", "table3"),
  },
});

module.exports = expenses;
