import { IngredientEntity } from "src/recipes/recipeModels/ingredient.entity";
import { RecipeEntity } from "src/recipes/recipeModels/recipe.entity";
export declare class recipeWrapper {
    recipe: RecipeEntity;
    score: number;
    ingredients: IngredientEntity[];
    numOfIngredients: number;
    numOfCrucialIngredients: number;
    numOfMissingIngredients: number;
    numOfMissingCrucialIngredients: number;
    constructor(recipe: RecipeEntity);
}
