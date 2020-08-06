import { Observable } from 'rxjs';
import { recipeArray } from './recipeModels';
export interface recipeGrpcService {
    createRecipes(Recipe: any): Observable<any>;
    createUnprocessedRecipe(UnprocessedRecipe: any): Observable<any>;
    getAllRecipes(data: recipeArray): Observable<any>;
    searchRecipes(RecipeSearchRequest: any): Observable<any>;
    browseRecipes(RecipeBrowseRequest: any): Observable<any>;
    getMyRecipes(RecipeLibraryRequest: any): Observable<any>;
    updateRecipe(Recipe: any): Observable<any>;
    deleteRecipe(Recipe: any): Observable<any>;
}
