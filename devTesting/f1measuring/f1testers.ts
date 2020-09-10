
import { parse as parserv2 } from 'recipe-ingredient-parser-v2';
// const Ingreedyv2 = require('ingreedy-js');
const Ingreedyv1 = require('ingreedie');
const ingredientParser = require('ingredients-parser')
const ing = require('ingredientparser');

const filesys = require('fs');
const readline = require('readline');

/************user variables******************/
// const maxRecipes = 27638
const maxRecipes = 100;



export type TestCase = {
    index: number,
    input: string,
    name: string,
    qty: number,
    unit: string,
    Comment: string
}


export type result = {
    testCase: TestCase,
    nameResult: number,
    qtyResult: number,
    unitResult: number,
}

export class f1tester {
    

    public unitTypes = ['weight','volume','misc']
    public possibleUnitLists = [
         ["gram","kilogram","ounce","pound"],
         ["cup","teaspoon","tablespoon","pint","liter","milliliter","cm3","mm3","m3","can"],
         ["","unkown","clove","large","medium","small","stick","package","bag", "pinch","slice","quart","piece","box"]
    ]
    public verifiedUnits = ["cup","teaspoon",null,"tablespoon","pound","ounce","clove","large","medium","stick","package",
    "can","kilogram","pinch","slice","small","bag","quart","piece","pint","gram","milliliter","box","gallon","liter"]

   

    constructor(){
        let array = filesys.readFileSync("./nyt-ingredients-snapshot-2015.csv", 'utf8').toString().split('\n');
        var testCases: TestCase[] = [];
        var resultsArray: result[] = [];
        for (var line of array) {
            let splitLine = line.split(',');
            if(splitLine[0] === null || splitLine[0].length == 0){
                let testCase:TestCase = {
                    index: splitLine[0],
                    input: splitLine[1],
                    name: splitLine[2],
                    qty: splitLine[3],
                    unit: splitLine[4],
                    Comment: splitLine[5]
               }
            testCases.push(testCase);
            let result = parserv2(testCase.input);
               if(testCase.qty == parseInt(result.quantity)){
                    var quantityResults = 1
               } else {
                   var quantityResults = 0
               }
               if(testCase.unit.toUpperCase() == result.unit.toUpperCase()){
                 var unitResults = 1;
               } else {
                var unitResults = 0
               }
               if(testCase.name.toUpperCase() == result.ingredient.toUpperCase()){
                   var nameResults = 1;
               } else if(result.ingredient.toUpperCase().includes(testCase.name.toUpperCase())){
                   var nameResults = 0.5;
               } else {
                   var nameResults = 0;
               }
               let recipeResult: result = {
                    testCase: testCase,
                    nameResult: nameResults,
                    qtyResult: quantityResults,
                    unitResult: unitResults
               }
               resultsArray.push(recipeResult);
            }
        }
        var truePositive = 0
        var partialScores = 0
        var trueNegative = 0
        var falseNegative = 0
        var falsePositive = 0
        for (var recipe of resultsArray) {
            if()
        }

    }
}

let searcherTester: f1tester = new f1tester();
