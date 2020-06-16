var express = require("express");
var router = express.Router();
const { Account } = require("../database/models");
const { FoodEntry} = require("../database/models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Account.findAll()
    .then((accounts) => res.json(accounts))
    .catch((err) => console.log(err));
});



//all food entries:
router.get("/", async (req, res, next) => {
  try {
    // if successful:
    const account = await Account.findAll( { include: FoodEntry });
    // send back the student as a response
    res.status(200).json(account);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});



//food entries by id:
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
