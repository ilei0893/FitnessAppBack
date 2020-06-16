var express = require("express");
var router = express.Router();
const { Account } = require("../database/models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Account.findAll()
    .then((accounts) => res.json(accounts))
    .catch((err) => console.log(err));
});
```````````````````
module.exports = router;