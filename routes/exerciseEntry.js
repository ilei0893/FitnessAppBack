var express = require("express");
var router = express.Router();
const { ExerciseEntry } = require("../database/models");


//all exercises entries:
// /api/exercises/
router.get("/", async (req, res, next) => {
  try {
    // if successful:
    console.log("Hello");
    const exercise = await ExerciseEntry.findAll();
    // send back the exercises as a response
    res.status(200).json(exercise);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});

// Route to handle removing an exercise entry
router.delete("/:usernameId/:id", async (req, res, next) => {
  const usernameIdToDelete = req.params.usernameId;
  const  idToDelete = req.params.id;
  // get a username and id of exercise entry for deletion
  try {
    // invoke the .destroy() method on the entry
   await ExerciseEntry.destroy({
    where:{
      id : idToDelete,
      usernameId : usernameIdToDelete
    }
   });
    // await entry.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;