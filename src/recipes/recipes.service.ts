import { Injectable, UseGuards } from '@nestjs/common';
import { Recipe, UnprocessedRecipe} from './recipeModels/recipeModels';
import { AuthGuard } from '@nestjs/passport';
import { RecipeBrowseRequest, RecipeSearchRequest } from 'src/protocols/recipeProtocols/recipes_pb';

@Injectable()
export class RecipesService {

    @UseGuards(AuthGuard('jwt'))
    createRecipe(recipe: Recipe){
        
    }

    createUnprocessedRecipe(recipe: UnprocessedRecipe){

    }
    
    getAllRecipes(){
        // returns all recipes

    }

    searchRecipes(RecipeSearchRequest: RecipeSearchRequest){
        // returns recipes matching string
        
    }

    browseRecipes(recipeBrowseRequest: RecipeBrowseRequest){

    }
    
    updateRecipe(recipe: Recipe){
        
    }

    deleteRecipe(recipe: Recipe){
        
    }

}

