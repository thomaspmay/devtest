import { unproRecipe } from "./recipe.entity";
import { parse as parserv2 } from 'recipe-ingredient-parser-v2';
import { ingredient } from "./recipeRanking/recipeRanker";
// const Ingreedyv2 = require('ingreedy-js');
const Ingreedyv1 = require('ingreedie');
const ingredientParser = require('ingredients-parser')
const ing = require('ingredientparser');

const filesys = require('fs');
const readline = require('readline');

/************user variables******************/
// const maxRecipes = 27638
const maxRecipes = 100;

export class recipeDBloader {
    folder = "recipesRaw";
    titles: string[] = [];
    ids: string[] = [];
    parser: any;
    parserName: string;
    finalRecipes: any[];

    public unitTypes = ['weight','volume','misc']
    public possibleUnitLists = [
         ["gram","kilogram","ounce","pound"],
         ["cup","teaspoon","tablespoon","pint","liter","milliliter","cm3","mm3","m3","can"],
         ["","unkown","clove","large","medium","small","stick","package","bag", "pinch","slice","quart","piece","box"]
    ]
    public verifiedUnits = ["cup","teaspoon",null,"tablespoon","pound","ounce","clove","large","medium","stick","package",
    "can","kilogram","pinch","slice","small","bag","quart","piece","pint","gram","milliliter","box","gallon","liter"]

    constructor(dbType: string, parserType: string){
        if(dbType == "yummy"){
            this.loadYummyDB()
        } else {
            throw console.error("Unkown recipe DB loader instructions");
        }
        switch(parserType){
            case "v2":
                this.parser == parserv2;
                this.parserName = "v2";
            case "Ingreedyv1":
                this.parser = Ingreedyv1;
                this.parserName = "Ingreedyv1";
            // case "Ingreedyv2":
            //     this.parser = Ingreedyv2;
            //     this.parserName = "Ingreedyv2";
            case "ingredients-parser": // fork of ingreedyjs project
                this.parser = ingredientParser;
                this.parserName = "ingredients-parser";
            case "jdarling":
                this.parser = ing;
                this.parserName = 'ingredientparser';
            default:
                console.error("ERROR Unknown parser");
        }
        
    }

    async loadYummyDB(){
        let recipes: any[] = [];
        let recipeNames = this.folder + "/" + "recipeNames.txt";
        let idTitleObject = await this.loadAndParseFile(recipeNames);
        this.titles = idTitleObject.titles;
        this.ids = idTitleObject.ids;
        let possibleIngredients: string[] = [];
        // for(let i = 0; i < maxRecipes && i < idTitleObject.ids.length - 1; i ++){
            for(let i = 0;  i < idTitleObject.ids.length - 1; i ++){
            
            let fileAsString = filesys.readFileSync(this.folder + "/recipeMetadata/meta" + this.ids[i] + ".json", 'utf8').toString();
            try {
                let metadata = JSON.parse(fileAsString);
                let unprocessedRecipe: unproRecipe = {
                    id: i,
                    title: metadata.name,
                    description: metadata.attribution.text,
                    unproIngredients: metadata.ingredientLines,
                    ingredients: null ,
                    instructions: null ,
                    tags: metadata.attributes,
                    image: "img" + this.ids[i] + ".jpg"
                };
                // console.log(i + ":" + unprocessedRecipe.title);
                let ingredients: ingredient[] = [];
                    var counter = 0;
                    metadata.ingredientLines.forEach(line => {
                        
                        let parsedIngredient;
                        try {
                            counter+=1;
                            parsedIngredient = parserv2(line);
                            // console.log(line);
                            // console.log(parsedIngredient);
                            parsedIngredient.ingredientId = counter;
                            for (var i = 0; i < this.unitTypes.length; i++) {
                                for (var j = 0; j < this.possibleUnitLists[i].length; j++) {
                                    if(this.possibleUnitLists[i][j] == parsedIngredient.unit){
                                        parsedIngredient.unitTypeId = i;
                                        parsedIngredient.unitId = j;
                                    } else if (parsedIngredient.unit == null){
                                        parsedIngredient.unitTypeId = 2;
                                        parsedIngredient.unitId = 0;
                                    }
                                }
                            }
                            parsedIngredient.importance = this.calculateImportance(parsedIngredient,unprocessedRecipe);
                            ingredients.push(parsedIngredient);
                                
                            
                            
                        } catch(e) {
                            console.error(e);
                        }
                        unprocessedRecipe.ingredients = ingredients;
                    });
                    
                    recipes.push(unprocessedRecipe);
                    
                } catch(e) {
                    console.error(e);
                }
                
            this.finalRecipes = recipes;
        }
        filesys.writeFileSync("mockRecipes.txt", JSON.stringify(recipes));
                // filesys.writeFileSync("possibleUnits.txt", JSON.stringify(possibleIngredients));
    };

    calculateImportance(parsedIngredient,unprocessedRecipe){
        // is ingredient in title - return 10
        return 5;
        // tf-ifd of ingredients - return 4-8 based on score

        // is it a condiment - return 2
    }





        
        // checks for duplicates
        // let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
        // console.log(findDuplicates(titles)) // All duplicates
        //   ids.forEach(id => {
        //       filesys.
        //   });
        // console.log(this.titles);
        // console.log(this.ids);
    

    loadAndParseFile(recipeNames: string){
        try {
            let array = filesys.readFileSync(recipeNames, 'utf8').toString().split('\n');
            let titles: string[] = [];
            let ids: string[] = [];
            array.forEach(line => {
                if(line != "" || line == undefined){
                    let split: string[] = line.split('\t');

                    let untrimmedId: string = split[1];
                    if(untrimmedId != undefined){
                        var id: string = untrimmedId.trim();
                    } else {
                        var id: string = untrimmedId;
                    }

                    let untrimmedName: string = split[0];
                    if(untrimmedName != undefined){
                        var name: string = untrimmedName.trim();
                    } else {
                        var name: string = untrimmedName;
                    }
                    
                    let removedNumbers: string = name.replace(/[0-9]/g, "");
                    let processedName: string = removedNumbers.replace(/-/g," ");
                    titles.push(processedName);
                    ids.push(id);
                }
            });
            return {"ids": ids, "titles": titles}
        } catch(e){
            console.error(e);
        }
    }

    }
