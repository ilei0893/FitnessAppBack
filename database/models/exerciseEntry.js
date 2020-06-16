const Sequelize = require("sequelize");
const db = require("../db");

const ExerciseEntry = db.define("exercise entry", {
  entryID: {
    type: Sequelize.INTEGER,
    primaryKey:true,
  },
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
    isIn: [[10, 15, 20, 30, 45, 60, 75, 90, 105, 120]]
  }
});

module.exports = ExerciseEntry;