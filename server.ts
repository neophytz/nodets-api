import { env } from "./src/env";
import { App } from "./src/app";
// import { middleware, options } from "./src/middleware";
// import { allRoutes } from "./src/routes/routes.module";

const dotenv = require('dotenv');
dotenv.config()

const PORT: number = env().port; // getting the port based on current environment.

/* Configure App instance*/
// making a new object for App class.
const app = new App(PORT, [], [], []);
app.listen();

try {
  /* Connect to MongoDB*/
  const {user, pw, name, account} = env().db;
  const DB_URI = env().db.uri(user,pw,name,account);
  app.mongoDB(DB_URI);
} catch(e) {
  console.log(e);
  console.log("Failed to create DB Connection string");
}
