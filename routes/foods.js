var express = require("express");
var router = express.Router();
const { FoodEntry } = require("../database/models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  FoodEntry.findAll()
    .then((foods) => res.json(foods))
    .catch((err) => console.log(err));
});

module.exports = router;
