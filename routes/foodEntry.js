var express = require("express");
var router = express.Router();
const { FoodEntry } = require("../database/models");


//all food entries:
// /api/foods
router.get("/", async (req, res, next) => {
  try {
    // if successful:
    console.log("Hello");
    const food = await FoodEntry.findAll();
    // send back the foods as a response
    res.status(200).json(food);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});

router.delete("/:usernameId/:id", async (req, res, next) => {
  const usernameIdToDelete = req.params.usernameId;
  const  idToDelete = req.params.id;
  // get a username and id of food entry for deletion
  try {
    // invoke the .destroy() method on the entry
   await FoodEntry.destroy({
    where:{
      id : idToDelete,
      usernameId : usernameIdToDelete
    }
   });
    //await entry.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});



module.exports = router;


