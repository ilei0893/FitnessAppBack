const Sequelize = require("sequelize");
const db = require("../db");

const Accounts = db.define("account", {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Accounts;