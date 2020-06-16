var express = require("express");
var router = express.Router();
const { ExerciseEntry } = require("../database/models");


//all food entries:
router.get("/", async (req, res, next) => {
  try {
    // if successful:
    console.log("Hello");
    const exercise = await ExerciseEntry.findAll();
    // send back the student as a response
    res.status(200).json(exercise);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});

module.exports = router;


