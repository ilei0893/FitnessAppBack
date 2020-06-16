const { Food } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Food.create({
      name: "Chicken",

    }),
  ]);
};

module.exports = seedDatabase;
