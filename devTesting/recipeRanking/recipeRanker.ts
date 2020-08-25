import { recipeDBloader } from "../recipeDBloader";
import { unproRecipe } from "../recipe.entity";

const filesys = require('fs');
const readline = require('readline');

const perf = require('execution-time')();



/************user variables******************/

export class recipeRank {
    total: number
    rank: number
    original: string
    tokens: string[]
    tokenScores: number[]
}

export class food {
    name: string
    amount: number
    unit: string
}

export class ingredient {
    quantity: string
    unit: string
    ingredient: string
    minQty: string
    maxQty: string
}

export class recipeRanker {
    
    constructor(ingredientTester: recipeDBloader){
        // let recipeArray = this.loadRecipeList("recipeSearching/setRecipeList.txt");
        perf.start('search'); // starts timer

        let recipes: unproRecipe[] = ingredientTester.finalRecipes;

        for(let i = 0; i < recipes.length; i++){
            let recipeIngredients = recipes[i].ingredients;
            for(let i = 0; i < recipeIngredients.length; i++){
                let score = 5;
                let validUnit = null;
                // check if valid food found
                if(recipeIngredients[i].ingredient){
                    score = 100; // couldnt find ingredient should negatively weight
                }
                // check if unit is valid
                if(this.isValidUnit(recipeIngredients[i].unit)){
                    // increase base cost if valid unit was given and not enough
                    validUnit = true;
                    score += 5;
                }
                // check if quantity found
                if(recipeIngredients[i].quantity){
                    // increase base cost if quantity given and not enough
                    score += 10;
                }
                //
                if()

           }
        }
    }

    isValidUnit(string: string): boolean{
        const unitList: string[] = [];
        if(unitList.includes(string)){
            return true;
        }
        return false;
    }


    // not needed as passing recipeLoader to dry the code 

    // loadRecipeList(file: string){
    //     let recipeTitles:string[] = filesys.readFileSync(file, 'utf8').toString().split('\n');
    //     console.log(recipeTitles);
    //     return recipeTitles;
    // };
}
