# Recipe App


## Description

Recipe Application is a web application which stores a large amount of  tasty recipes. 


## Routes

Recipes:

- GET /recipes: Get all recipes
- GET /recipes/:id: Get a recipe by ID
- Post /recipes: Create a new recipe
- PUT /recipes/:id: Update a recipe by ID
- DELETE /recipes/:id: Delete a recipe by ID


### Recipe Schema

Recipe:
    - Title: String
    - Ingredients: String
    - Description: String
    - CreatedBy : Author
    - CreatedAt: Date
    - UpdatedAt: Date
```

Example:
....

Create Recipe:
{
    "Title": "Carrot Rice",
    "Ingredients":"Carrot, Onion,Rice",
    "Content": "This is my first recipe on RecipeApp."
}

