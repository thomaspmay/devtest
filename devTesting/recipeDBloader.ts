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
const maxRecipes = 100;

export class recipeDBloader {
    folder = "recipesRaw";
    titles: string[] = [];
    ids: string[] = [];
    parser: any;
    parserName: string;
    finalRecipes: unproRecipe[];

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
        let recipes: unproRecipe[] = [];
        let recipeNames = this.folder + "/" + "recipeNames.txt";
        let idTitleObject = await this.loadAndParseFile(recipeNames);
        this.titles = idTitleObject.titles;
        this.ids = idTitleObject.ids;
        for(let i = 0; i < maxRecipes && i < idTitleObject.ids.length - 1; i ++){
            
            let fileAsString = filesys.readFileSync(this.folder + "/recipeMetadata/meta" + this.ids[i] + ".json", 'utf8').toString();
            try {
                let metadata = JSON.parse(fileAsString);
                let unprocessedRecipe: unproRecipe = {
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
                    
                    metadata.ingredientLines.forEach(line => {
                        
                        let parsedIngredient;
                        try {
                            parsedIngredient = parserv2(line);
                            // console.log(line);
                            // console.log(parsedIngredient);
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
    };





        
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
