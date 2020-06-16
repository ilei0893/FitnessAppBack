
var express = require("express");
var router = express.Router();
const { FoodEntry } = require("../database/models");





/* GET ALL foods listing . */
// router.get("/", function (req, res, next) {
//   FoodEntry.findAll()
//     .then((foodEntry) => res.json(foodEntry))
//     .catch((err) => console.log(err));
// });

//all food entries:
router.get("/", async (req, res, next) => {
  try {
    // if successful:
    const food = await FoodEntry.findAll();
    // send back the student as a response
    res.status(200).json(food);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});

module.exports = router;




/*

router.get("/:id", async (req, res, next) => {
  // take the id from params
  const { id } = req.params;
  // query the database for a student with matching id
  try {
    // if successful:
    const student = await Student.findByPk(id, { include: Campus });
    // send back the student as a response
    res.status(200).json(student);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});
*/