import { Injectable, UseGuards } from '@nestjs/common';
import { Recipe, UnprocessedRecipe} from './recipeModels/recipeModels';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RecipesService {

    @UseGuards(AuthGuard('jwt'))
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

