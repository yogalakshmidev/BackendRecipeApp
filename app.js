// to install express
const express = require('express');
const recipesRouter = require('./routes/recipeRoutes');
// to create app in express
const app = express();

//Middleware--- parse the request body to JSON
app.use(express.json());

// use is used and in this we give prefix for the url
app.use('/recipes', recipesRouter);

// to export
module.exports = app;
