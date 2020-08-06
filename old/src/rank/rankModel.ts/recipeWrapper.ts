import { IngredientEntity } from "src/recipes/recipeModels/ingredient.entity";
import { RecipeEntity } from "src/recipes/recipeModels/recipe.entity";


export class recipeWrapper {
    score: number;
    ingredients: IngredientEntity[];
    numOfIngredients: number;
    numOfCrucialIngredients: number;
    numOfMissingIngredients: number;
    numOfMissingCrucialIngredients: number; 

    constructor(public recipe: RecipeEntity){
        this.score = 0;
        this.ingredients = this.recipe.ingredients;
        for (let index = 0; index < this.ingredients.length; index++) {
            let ingredient = this.ingredients[index];
            ingredient.
        }
    }

    
    
}