// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Account = require("./account");
const Entries = require("./entries");
const FoodEntry = require("./foodEntry");
const ExerciseEntry = require("./exerciseEntry");

Account.hasMany(Entries);

Entries.hasMany(FoodEntry);
Entries.hasMany(ExerciseEntry);

FoodEntry.belongsTo(Account);
ExerciseEntry.belongsTo(Account);


module.exports = {
  Account,
  Entries,
  FoodEntry,
  ExerciseEntry  
};
