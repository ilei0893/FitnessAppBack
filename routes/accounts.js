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

//account entries by id:
router.get("/:id", async (req, res, next) => {
  // take the id from params
  const { id } = req.params;
  console.log("Helloooooooo");
  // query the database for a student with matching id
  try {
    // if successful:
    const account = await Account.findByPk(id, { include: FoodEntry });
    console.log(account);
    // send back the student as a response
    res.status(200).json(account);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});


module.exports = router;
