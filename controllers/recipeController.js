// import model here
const Recipe = require("../models/recipe");

const recipeController = {
  createRecipe: async (req, res) => {
       try {
        // get the data from the request body
      const { Title, Ingredients, Content } = req.body;

      // Create a new Recipe
      const newRecipe = new Recipe({
        Title,
        Ingredients,
        Content,
      });

      // Save the post in the database
      await newRecipe.save();

      // send the response to the frontend
      res.status(201).json({ message: "Recipe created successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getRecipes: async (req, res) => {
    try {
      // get all the recipes from the database
      const recipes = await Recipe.find().select("-__v");

      // send a response
      res.status(200).json({recipes});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getRecipe: async (req, res) => {
    try {
      // get the recipe id from the request parameter
      const { id } = req.params;

      // get the receipe from the database
      const recipe = await Recipe.findById(id).select("-__v");

      // send the response
      res.status(200).json({ recipe });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateRecipe: async (req, res) => {
    try {
      // get the recipe id from the request parameter
      const { id } = req.params;

      // get the data from the request body
      const { Title, Ingredients, Content } = req.body;

      // update the recipe
      await Recipe.findByIdAndUpdate(id, { Title, Ingredients, Content });

      // send the response
      res.status(200).json({ message: 'Recipe Updated Successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      // get the recipe id from the request parameter
      const { id } = req.params;

      // delete the recipe
      await Recipe.findByIdAndDelete(id);

      // send the response
      res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
module.exports = recipeController;
