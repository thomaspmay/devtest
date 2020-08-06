import { Recipe, UnprocessedRecipe } from './recipeModels/recipeModels';
import { RecipeBrowseRequest, RecipeSearchRequest } from 'src/protocols/recipeProtocols/recipes_pb';
export declare class RecipesService {
    createRecipe(recipe: Recipe): void;
    createUnprocessedRecipe(recipe: UnprocessedRecipe): void;
    getAllRecipes(): void;
    searchRecipes(RecipeSearchRequest: RecipeSearchRequest): void;
    browseRecipes(recipeBrowseRequest: RecipeBrowseRequest): void;
    updateRecipe(recipe: Recipe): void;
    deleteRecipe(recipe: Recipe): void;
}
