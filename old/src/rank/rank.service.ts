import { Injectable } from '@nestjs/common';
import { Recipe } from 'src/protocols/recipeProtocols/recipes_pb';

@Injectable()
export class RankService {
    rankRecipes(recipes: Recipe[], foods: Food[]){
        
        for (let i = 0; i < recipes.length; i++) {
            recipes[i].score = 0;
            
        }
    }

    

    
}
