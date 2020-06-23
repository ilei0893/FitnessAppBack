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

//-------------------------------------------------------------------------
// Route to add a new food entry to the db
// /api/foods/add
router.post("/add/", async (req, res, next) => {
  // Take the form data from the request body
  const {name, calories, fat, carbs, protein, imageUrl, usernameId} = req.body;
  // Create an food entry object
  const entryObj = {
    name: name,
    calories: calories,
    fat : fat,
    carbs : carbs,
    protein : protein,
    imageUrl : imageUrl,
    usernameId : usernameId
  };
  try {
    // Create a new food entry on the database
    const newEntry = await FoodEntry.create(entryObj);
    // send that food entry as a json to the client
    res.status(201).send(newEntry);
  } catch (err) {
    next(err);
  }
});

module.exports = router;


