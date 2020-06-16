const { Account } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Account.create({
      username: "johndoe98",
      password: "john1998"
    }),
  ]);
};

module.exports = seedDatabase;
