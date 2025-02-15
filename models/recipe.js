// import mongoose
const mongoose = require('mongoose');

// create a schema
const recipeSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Ingredients: {
    type: String,
  },
  Content: {
    type: String,
  },

  CreatedAt: {
    type: Date,
    default: Date.now,
  }
});

// create a recipe model and export it
module.exports = mongoose.model('Recipe', recipeSchema, 'recipes');
