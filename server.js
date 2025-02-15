

// Only  for db connectivity and server issues

const mongoose = require("mongoose");
// import dotenv
require("dotenv").config();

// to import application code here
const app = require("./app");

// for database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connnect to MongoDB");

    // Start the server
    app.listen(3001, () => {
      console.log("Server started on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.log("error in connection in mongodb", err);
  });
