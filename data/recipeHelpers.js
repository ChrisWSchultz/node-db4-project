// getRecipes(): should return a list of all recipes in the database.
// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
const db = require('../data/dbConfig')

const getRecipes = () => {
    return db.table('recipes')
}

const getShoppingList = (recipe_id) => {
    return db.table('recipe_ingredient_rel')
        .join('ingredients', 'recipe_ingredient_rel.ingredient_id', '=', 'ingredients.id')
        .where('recipe_id', recipe_id)
        .select('ingredients.name as ingredient', 'recipe_ingredient_rel.quantity')
}

const getInstructions = (recipe_id) => {
    return db.table('instructions')
        .where('recipe_id', recipe_id)
        .orderBy('step')
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
