import { Observable } from 'rxjs';
import { recipeArray } from './recipeModels';

export interface recipeGrpcService {
    createRecipes(Recipe) returns (requestResponse);
    createUnprocessedRecipe(UnprocessedRecipe) returns (requestResponse);

    // read
    getAllRecipes(numberArray: recipeArray): Observable<any>;
    searchRecipes(RecipeSearchRequest) returns (RecipeSearchResponse);
    browseRecipes(RecipeBrowseRequest) returns (RecipeBrowseResponse);
    
    getMyRecipes(RecipeLibraryRequest) returns (RecipeLibraryResponse);
    
    // update
    updateRecipe(Recipe) returns (requestResponse);

    // delete
    deleteRecipe(Recipe) returns (requestResponse);
}