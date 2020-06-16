var express = require("express");
var router = express.Router();
const { Food } = require("../database/models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Food.findAll()
    .then((foods) => res.json(foods))
    .catch((err) => console.log(err));
});

module.exports = router;
