var express = require("express");
var router = express.Router();

// Subrouters;
const accountsRouter = require("./accounts");
//not setting a foodrouter or exerciserouter
const foodRouter = require("./foodEntry");
const exerciseRouter = require("./exerciseEntry")



// Mount our subrouters to assemble our apiRouter;
router.use("/accounts", accountsRouter);
router.use("/foods", foodRouter);
router.use("/exercises", exerciseRouter)


// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
