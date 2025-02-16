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
  Author:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  Likes:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],

  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
      type: Date
  }
});

// create a recipe model and export it
module.exports = mongoose.model('Recipe', recipeSchema, 'recipes');
