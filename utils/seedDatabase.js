
const { Account, FoodEntry, ExerciseEntry } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    //mock account 1
    Account.create({
      username: "johndoe98",
      password: "john1998"
    }),
    //mock account 2
    Account.create({
      username: "sally1",
      password: "sally",
    }),
    //mock account 3
    Account.create({
      username: "frank75",
      password: "frank"
    }),

    //food entries:
    FoodEntry.create({
      name: "beef",
      calories:90,
      fat:1,
      carbs:19,
      protein:1,
      accountId:1
    }),
    
    FoodEntry.create({
      name: "apple",
      calories:90,
      fat:1,
      carbs:19,
      protein:1,
      accountId:1
    }),
    
    FoodEntry.create({
      name: "chicken",
      calories:190,
      fat:3,
      carbs:2,
      protein:30,
      accountId:1
    }),
    FoodEntry.create({
      name: "spinach",
      calories:60,
      fat:1,
      carbs:4,
      protein:9,
      accountId:3
    }),
    //-------------------
    //exercise entries:
    ExerciseEntry.create({
      name: "run",
      intensity: "medium",
      time: 60,
      accountId:1
    }),
    ExerciseEntry.create({
      name: "run",
      intensity: "medium",
      time: 60,
      accountId:1
    }),
    ExerciseEntry.create({
      name: "walk",
      intensity: "low",
      time: 60,
      accountId:2
    }),
    ExerciseEntry.create({
      name: "swim",
      intensity: "medium",
      time: 60,
      accountId:2
    }),
  ])
}

module.exports = seedDatabase;