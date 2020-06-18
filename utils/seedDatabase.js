const { User, FoodEntry, ExerciseEntry } = require("../database/models");

const seedDatabase = async () => {

    //mock account 1
    await User.create({
      username: "johndoe98",
      password: "john1998"
    })
    
    //mock account 2
    // User.create({
    //   username: "sally1",
    //   password: "sally",
    // }),
    // //mock account 3
    // User.create({
    //   username: "frank75",
    //   password: "frank",
    // }),

    //food entries:
    await FoodEntry.create({
      name: "beef",
      calories:90,
      fat:1,
      carbs:19,
      protein:1,
      usernameId:"johndoe98"
    })
    // FoodEntry.create({
    //   name: "apple",
    //   calories:90,
    //   fat:1,
    //   carbs:19,
    //   protein:1,
    //   usernameId:"johndoe98"
    // }),
    
    // FoodEntry.create({
    //   name: "chicken",
    //   calories:190,
    //   fat:3,
    //   carbs:2,
    //   protein:30,
    //   usernameId:"johndoe98"
    // }),
    // FoodEntry.create({
    //   name: "spinach",
    //   calories:60,
    //   fat:1,
    //   carbs:4,
    //   protein:9,
    //   usernameId:"sally1"
    // }),
    // FoodEntry.create({
    //   name: "spinach",
    //   calories:60,
    //   fat:1,
    //   carbs:4,
    //   protein:9,
    //   usernameId:"frank75"
    // }),
    //-------------------
    //exercise entries:
    await ExerciseEntry.create({
      name: "run",
      intensity: "medium",
      time: 60,
      usernameId:"johndoe98"
    })
    // ExerciseEntry.create({
    //   name: "run",
    //   intensity: "medium",
    //   time: 60,
    //   usernameId:"frank75"
    // }),
    // ExerciseEntry.create({
    //   name: "walk",
    //   intensity: "low",
    //   time: 60,
    //   usernameId:"frank75"
    // }),
    // ExerciseEntry.create({
    //   name: "swim",
    //   intensity: "medium",
    //   time: 60,
    //   usernameId:"johndoe98"
    // }),
    // ExerciseEntry.create({
    //   name: "bike",
    //   intensity: "medium",
    //   time: 60,
    //   usernameId:"sally1"
    // }),
}

module.exports = seedDatabase;