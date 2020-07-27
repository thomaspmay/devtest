import { Injectable } from '@nestjs/common';
import { Recipe, UnprocessedRecipe} from './models/recipeModels'

@Injectable()
export class RecipesService {
    getAllRecipes(){
        // returns all recipes

    }

    searchRecipes(query: string){
        // returns recipes matching string

    }

    createRecipe(recipe: UnprocessedRecipe){
        
    }
    
    updateRecipe(recipe: Recipe){
        
    }

    deleteRecipe(recipe: Recipe){
        
    }

}
