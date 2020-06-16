const { FoodEntry } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    FoodEntry.create({
      name: "Chicken",
    }),
  ]);
};

module.exports = seedDatabase;
