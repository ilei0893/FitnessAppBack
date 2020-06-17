const Sequelize = require("sequelize");
const db = require("../db");

const Accounts = db.define("account", {
  username: {
    type: Sequelize.STRING,
    primaryKey:true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Accounts;