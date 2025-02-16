// to create router use express
const express = require('express');

//  import from Controller

// const recipeController= require("../controllers/recipeController");

const { createRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe }=  require('../controllers/recipeController');
// import middleware to create authorization for create recipe
const auth= require('../middlewares/auth');
// create a new router
const recipesRouter = express.Router();

// recipesRouter.post('/',recipeController.createRecipe );
recipesRouter.post('/',auth.isAuthenticated,createRecipe);
recipesRouter.get('/',getRecipes);
recipesRouter.get('/:id', getRecipe);
recipesRouter.put('/:id',updateRecipe);
recipesRouter.delete('/:id',deleteRecipe);

module.exports = recipesRouter;
