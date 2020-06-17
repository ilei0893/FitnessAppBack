var express = require("express");
var router = express.Router();
const { Account, FoodEntry, ExerciseEntry } = require("../database/models");


//all account entries:
router.get("/", async (req, res, next) => {
  try {
    // if successful:
    const account = await Account.findAll({ include: [
      {
        model: FoodEntry,
      },
      {
        model: ExerciseEntry,
      }]
  });
    console.log(account);
    // send back the student as a response
    res.status(200).json(account);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});


//-------------------------------------------------------------------------
//account entries by id:
router.get("/:username", async (req, res, next) => {
  // take the id from params
  const { username } = req.params;
  // query the database for a student with matching id
  try {
    // if successful:
    const account = await Account.findByPk(username, { include: [
      {
        model: FoodEntry,
      },
      {
        model: ExerciseEntry,
      }]
    });
    console.log(account);
    // send back the student as a response
    res.status(200).json(account);
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



module.exports = router;
