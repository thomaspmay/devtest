import { Observable } from 'rxjs';
import { recipeArray } from './recipeModels';

export interface recipeGrpcService {
    createRecipes(Recipe) :Observable<any>; // requestResponse
    createUnprocessedRecipe(UnprocessedRecipe) :Observable<any> // requestResponse

    // read
    getAllRecipes(data: recipeArray): Observable<any>;
    searchRecipes(RecipeSearchRequest) :Observable<any> // RecipeSearchResponse
    browseRecipes(RecipeBrowseRequest) :Observable<any> // RecipeBrowseResponse
    
    getMyRecipes(RecipeLibraryRequest) :Observable<any> // RecipeLibraryResponse
    
    // update
    updateRecipe(Recipe) :Observable<any>; // requestResponse

    // delete
    deleteRecipe(Recipe) :Observable<any>; // requestResponse
}