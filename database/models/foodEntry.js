const Sequelize = require("sequelize");
const db = require("../db");

const FoodEntry = db.define("foodEntry", {
  // entryID: {
  //   type: Sequelize.INTEGER,
  //   primaryKey:true,
  // },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  // calories: {
  //   type: Sequelize.INTEGER,
  // },
  // fat: {
  //   type: Sequelize.INTEGER,
  // },
  // carbs: {
  //   type: Sequelize.INTEGER,
  // },
  // protein: {
  //   type: Sequelize.INTEGER,
  // }
});

module.exports = FoodEntry;
