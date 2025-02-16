// to install express
const express = require('express');
// to import
const recipesRouter = require('./routes/recipeRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

// to create app in express
const app = express();

//Middleware--- parse the request body to JSON
app.use(express.json());

// Parse the cookie to get its value
app.use(cookieParser());

// use is used and in this we give prefix for the url
app.use('/recipes', recipesRouter);
app.use('/auth', authRouter);
// to export`
module.exports = app;
