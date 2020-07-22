import { Injectable } from '@nestjs/common';
import { Recipe} from '../shared/recipeModels'

@Injectable()
export class RecipesService {
    getAllRecipes(){
        // returns all recipes

    }

    searchRecipes(query: string){
        // returns recipes matching string

    }

    createRecipe(recipe: Recipe){

    }


}
