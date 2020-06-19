// /**
//  * Here, we will sync our database, create our application, and export this
//  * module so that we can use it in the bin directory, where we will be able to
//  * establish a server to listen and handle requests and responses;
//  */

// // Load environmental variables from .env file
// require("dotenv").config();

// const express = require("express");
// const session = require("express-session");
// const passport = require("passport");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const helmet = require("helmet");
// const compression = require("compression");
// const cors = require("cors");

// // Utilities;
// const seedDatabase = require("./utils/seedDatabase");

// // Our database instance;
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const db = require("./database");
// const sessionStore = new SequelizeStore({ db });

// // Our apiRouter
// const apiRouter = require("./routes/index");
// const authRouter = require("./auth/index");

// // A helper function to sync our database;
// const syncDatabase = () => {
//   if (process.env.NODE_ENV === "production") {
//     db.sync();
//   } else {
//     console.log("As a reminder, the forced synchronization option is on");
//     db.sync({ force: true })
//       .then(() => seedDatabase())
//       .catch((err) => {
//         if (err.name === "SequelizeConnectionError") {
//           seedDatabase();
//         } else {
//           console.log(err);
//         }
//       });
//   }
// };

// // Instantiate our express application;
// const app = express();

// // A helper function to create our app with configurations and middleware;
// const configureApp = () => {
//   app.use(helmet());
//   app.use(logger("dev"));
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
//   app.use(compression());
//   app.use(cookieParser());

//   app.use(express.static(path.join(__dirname, "public")));

//   app.use(
//     session({
//       secret: "a super secretive secret key string to encrypt and sign the cookie",
//       store: sessionStore,
//       resave: false,
//       saveUninitialized: false
//     })
//   );

//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));

//   app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//   app.use(passport.initialize());
//   app.use(passport.session());

//   passport.serializeUser((account, done) => done(null, account.username));
//   passport.deserializeUser(async (username, done) => {
//     try {
//       const account = await db.models.account.findByPk(username);
//       done(null, account);
//     }
//     catch (err) {
//       done(err);
//     }
//   });
  
//   // Mount our apiRouter
//   app.use("/api", apiRouter);
//   app.use("/auth", authRouter);

//   // Error handling;
//   app.use((req, res, next) => {
//     if (path.extname(req.path).length) {
//       const err = new Error("Not found");
//       err.status = 404;
//       next(err);
//     } else {
//       next();
//     }
//   });

//   // More error handling;
//   app.use((err, req, res, next) => {
//     console.error(err);
//     console.error(err.stack);
//     res.status(err.status || 500).send(err.message || "Internal server error.");
//   });
// };

// // Main function declaration;
// const bootApp = async () => {
//   await sessionStore.sync();
//   await syncDatabase();
//   await configureApp();
// };

// // Main function invocation;
// bootApp();

// // Export our app, so that it can be imported in the www file;
// module.exports = app;
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const authRouter = require("./auth");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

// Our database instance;
const db = require("./database");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({ db });


// Utilities;
const seedDatabase = require("./utils/seedDatabase");

// Instantiate our express application;
const app = express();

// Our apiRouter
const apiRouter = require("./routes/index");


// A helper function to sync our database;
const syncDatabase = () => {
  if (process.env.NODE_ENV === "production") {
    db.sync();
  } else {
    console.log("As a reminder, the forced synchronization option is on");
    db.sync({ force: true })
      .then(() => seedDatabase())
      .catch((err) => {
        if (err.name === "SequelizeConnectionError") {
          seedDatabase();
        } else {
          console.log(err);
        }
      });
  }
};

// A helper function to create our app with configurations and middleware;
const configureApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

  app.use(
    session({
      secret: "a super secretive secret key string to encrypt and sign the cookie",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  //----------------------------
  app.use(helmet());
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cookieParser());

  app.use(express.static(path.join(__dirname, "public")));

  // Mount our apiRouter
  app.use("/api", apiRouter);
  app.use("/auth", authRouter);

  // Error handling;
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });
  // More error handling;
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};
  
passport.serializeUser((user, done) => done(null, user.username));
passport.deserializeUser(async (username, done) => {
  try {
    const user = await db.models.user.findByPk(username);
    done(null, user);
  }
  catch (err) {
    done(err);
  }
});

// const startListening = () => {
//   const PORT = 3001;
//   app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}!!!`);
//   })
// }

const bootApp = async () => {
  await sessionStore.sync();
  await syncDatabase();
  await configureApp();
  // await startListening();
}

bootApp();

// Export our app, so that it can be imported in the www file;
module.exports = app;