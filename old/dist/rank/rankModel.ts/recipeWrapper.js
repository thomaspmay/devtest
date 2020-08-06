"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeWrapper = void 0;
const ingredient_entity_1 = require("../../recipes/recipeModels/ingredient.entity");
const recipe_entity_1 = require("../../recipes/recipeModels/recipe.entity");
class recipeWrapper {
    constructor(recipe) {
        this.recipe = recipe;
        this.score = 0;
        this.ingredients = this.recipe.ingredients;
        for (let index = 0; index < this.ingredients.length; index++) {
            let ingredient = this.ingredients[index];
            ingredient.
            ;
        }
    }
}
exports.recipeWrapper = recipeWrapper;
//# sourceMappingURL=recipeWrapper.js.map