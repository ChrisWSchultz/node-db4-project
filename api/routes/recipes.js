const express = require('express');

const Recipes = require('../../data/recipeHelpers')

const router = express.Router();

const errorMessage = {'message': 'there was an error'}

router.get('/recipes', async (request, response) => {
    try {
        let recipes = await Recipes.getRecipes();

        return response.status(200).json(recipes)
    }
    catch (error) {
        handleErrorMessage(response, error, errorMessage)
    }
});

router.get('/list/:id', async (request, response) => {
    try {
        let shoppingList = await Recipes.getShoppingList(request.params.id)

        return response.status(200).json(shoppingList)
    }
    catch (error) {
        handleErrorMessage(response, error, errorMessage)
    }
})

router.get('/instructions/:id', async (request, response) => {
    try {
        let instructions = await Recipes.getInstructions(request.params.id)

        return response.status(200).json(instructions)
    }
    catch (error) {
        handleErrorMessage(response, error, errorMessage)
    }
})

const handleErrorMessage = (response, error, message) => {
    console.error(error);
    return response.status(500).json(message)
}

module.exports = router;
