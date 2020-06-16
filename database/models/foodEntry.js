const Sequelize = require("sequelize");
const db = require("../db");

<<<<<<< HEAD
const FoodEntry = db.define("foodEntry", {
=======
const FoodEntry = db.define("food entry", {
  // entryID: {
  //   type: Sequelize.INTEGER,
  //   primaryKey:true,
  // },
>>>>>>> 49d4638ba97b452d1341ef7e2764e1567571f2a4
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
