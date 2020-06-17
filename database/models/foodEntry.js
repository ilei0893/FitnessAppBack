const Sequelize = require("sequelize");
const db = require("../db");

const FoodEntry = db.define("foodEntry", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  calories: {
    type: Sequelize.INTEGER,
  },
  fat: {
    type: Sequelize.INTEGER,
  },
  carbs: {
    type: Sequelize.INTEGER,
  },
  protein: {
    type: Sequelize.INTEGER,
  },
  usernameId: {
    type: Sequelize.STRING,
  }
});

module.exports = FoodEntry;
