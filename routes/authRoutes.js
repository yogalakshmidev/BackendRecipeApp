// import express
const express = require('express');
// const { register } = require("module");
const { register,logout, login, me } = require("../controllers/authController");

// import middleware auth for authentication 
const auth = require('../middlewares/auth');
// create router
const authRouter = express.Router();

// set up the routes
// public routes
authRouter.post('/register', register);
authRouter.post('/login', login);

// protected routes
authRouter.post('/logout',auth.isAuthenticated, logout);
authRouter.get('/me',auth.isAuthenticated,me);

// export the router
module.exports = authRouter;
