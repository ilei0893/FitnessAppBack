<<<<<<< HEAD
const { Account, FoodEntry, ExerciseEntry } = require("../database/models");

=======

const { Account } = require("../database/models");
>>>>>>> 49d4638ba97b452d1341ef7e2764e1567571f2a4

const seedDatabase = async () => {
  await Promise.all([
    //mock account 1
    Account.create({
      username: "johndoe98",
      password: "john1998"
    }),
    
    
    FoodEntry.create({
      name: "apple",
      calories:90,
      fat:1,
      carbs:19,
      protein:1,
      AccountId:1
    }),
    /*
    ExerciseEntry.create({
      name: "run",
      intensity: "medium",
      time: 60
    }),
    */
    //------------------------------------
    //mock account 2

    Account.create({
      username: "sally1",
      password: "sally",
    })


  ])
  }
    /*
    FoodEntry.create({
      name: "apple",
      calories:90,
      fat:1,
      carbs:19,
      protein:1
    }),
    FoodEntry.create({
      name: "chicken breast",
      calories:190,
      fat:3,
      carbs:2,
      protein:30
    }),
    FoodEntry.create({
      name: "spinach",
      calories:60,
      fat:1,
      carbs:4,
      protein:9
    }),
    */

    /*
    //------------------------------------
    //mock account 3
    Account.create({
      username: "frank75",
      password: "frank"
    }),

    FoodEntry.create({
      name: "ground beef",
      calories:300,
      fat:14,
      carbs:1,
      protein:50
    }),
    FoodEntry.create({
      name: "chicken breast",
      calories:190,
      fat:3,
      carbs:2,
      protein:30
    }),
    FoodEntry.create({
      name: "strawberries",
      calories:60,
      fat:1,
      carbs:24,
      protein:1
    }),
    //------------------------------------
    //mock account 4
    Account.create({
      username: "tom44",
      password: "tom"
    }),
    FoodEntry.create({
      name: "apple",
      calories:90,
      fat:1,
      carbs:19,
      protein:1
    }),
    ExerciseEntry.create({
      name: "walk",
      intensity: "low",
      time: 60
    }),
    ExerciseEntry.create({
      name: "swim",
      intensity: "medium",
      time: 60
    }),
  ]);
};


module.exports = seedDatabase;







/*
const FoodEntry = db.define("food entry", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  calories: {
    type: Sequelize.INTEGER,
  },
  fat: {
    type: Sequelize.INTEGER,
  },
  carbs: {
    type: Sequelize.INTEGER,
  },
  protein: {
    type: Sequelize.INTEGER,
  }
});

/*
const ExerciseEntry = db.define("exercise entry", {
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


*/

module.exports = seedDatabase;