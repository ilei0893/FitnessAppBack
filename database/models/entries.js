const Sequelize = require("sequelize");
const db = require("../db");

const Entries = db.define("entry", {
  entryID: {
    type: Sequelize.INTEGER,
    primaryKey:true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    isIn: [['food', 'exercise']],
  }
});

module.exports = Entries;