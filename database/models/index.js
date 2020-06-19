// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require("./user");
// const Entries = require("./entries");
const FoodEntry = require("./foodEntry");
const ExerciseEntry = require("./exerciseEntry");

User.hasMany(FoodEntry, {
  foreignKey: 'usernameId'
});
User.hasMany(ExerciseEntry, {
  foreignKey: 'usernameId'
});
// Entries.hasMany(FoodEntry);
// Entries.hasMany(ExerciseEntry);

FoodEntry.belongsTo(User);
ExerciseEntry.belongsTo(User);



module.exports = {
  User,
  // Entries,
  FoodEntry,
  ExerciseEntry  
};
