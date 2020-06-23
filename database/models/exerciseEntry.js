const Sequelize = require("sequelize");
const db = require("../db");

const ExerciseEntry = db.define("exerciseEntry", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  intensity: {
    type: Sequelize.STRING,
    allowNull: false,
    isIn: [['low', 'medium', 'high']],
  },
  time : { //in minutes:
    type: Sequelize.INTEGER,
    allowNull: false,
    isNumeric : true,
    isIn: [[10, 15, 20, 30, 45, 60, 75, 90, 105, 120]]
  },
  calories : {
    type: Sequelize.INTEGER,
    allowNull: false,
    isNumeric : true,
  },
  usernameId: {
    type: Sequelize.STRING,
  }
});

module.exports = ExerciseEntry;