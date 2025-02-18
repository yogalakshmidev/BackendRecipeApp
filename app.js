// to install express
const express = require('express');
// to import
const recipesRouter = require('./routes/recipeRoutes');
const authRouter = require('./routes/authRoutes');
const adminRouter=require('./routes/adminRoutes');
const profileRouter = require('./routes/profileRoutes');
// parse cookies
const cookieParser = require('cookie-parser');

// to create app in express
const app = express();

//  server static files --- use this before parse the json body
app.use('/uploads',express.static('uploads'));

//Middleware--- parse the request body to JSON
app.use(express.json());

// Parse the cookie to get its value
app.use(cookieParser());

// use is used and in this we give prefix for the url
app.use('/recipes', recipesRouter);
app.use('/auth', authRouter);
app.use('/admin',adminRouter);
app.use('/profile',profileRouter);
// to export`
module.exports = app;
