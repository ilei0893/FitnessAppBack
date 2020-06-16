const Sequelize = require("sequelize");
const db = require("../db");

const Food = db.define("food", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Food;
