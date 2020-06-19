var express = require("express");
var router = express.Router();
const { User, FoodEntry, ExerciseEntry } = require("../database/models");


//all user entries:
router.get("/", async (req, res, next) => {
  try {
    // if successful:
    const user = await User.findAll({ include: [
      {
        model: FoodEntry,
      },
      {
        model: ExerciseEntry,
      }]
  });
    console.log(user);
    // send back the accounts as a response
    res.status(200).json(user);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});


//-------------------------------------------------------------------------
//user entries by id:
router.get("/:username", async (req, res, next) => {
  // take the id from params
  const { username } = req.params;
  // query the database for all accounts matching username. INCLUDES FOODS AND EXERCISES
  try {
    // if successful:
    const user = await User.findByPk(username, { include: [
      {
        model: FoodEntry,
      },
      {
        model: ExerciseEntry,
      }]
    });
    console.log(user);
    // send back the entries as a response
    res.status(200).json(user);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});


//-------------------------------------------------------------------------
// Route to get foodentries associated with a username
// /api/accounts/username/foodentries
router.get("/:username/foodentries/", async (req, res, next) => {
  const un = req.params.username;
  // find the entries associated with the username
  try {
    const foundUsername = await FoodEntry.findAll({
      where:{
        usernameId: un
      }
    })
    res.status(200).json(foundUsername);
  } catch(err){
    next(err);
  }

});


//-------------------------------------------------------------------------
// Route to add a new user to the db
// /api/accounts/
router.post("/", async (req, res, next) => {
  // Take the form data from the request body
  const {username, password} = req.body;
  // Create an user object
  const accountObj = {
    username: username,
    password: password
  };
  try {
    // Create a new user on the database
    const newAccount = await User.create(accountObj);
    // send that user as a json to the client
    res.status(201).send(newAccount);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
