"use strict";
exports.__esModule = true;
exports.recipeRanker = exports.ingredient = exports.food = exports.recipeRank = void 0;
var filesys = require('fs');
var readline = require('readline');
var perf = require('execution-time')();
/************user variables******************/
var recipeRank = /** @class */ (function () {
    function recipeRank() {
    }
    return recipeRank;
}());
exports.recipeRank = recipeRank;
var food = /** @class */ (function () {
    function food() {
    }
    return food;
}());
exports.food = food;
var ingredient = /** @class */ (function () {
    function ingredient() {
    }
    return ingredient;
}());
exports.ingredient = ingredient;
var recipeRanker = /** @class */ (function () {
    function recipeRanker(ingredientTester) {
        // let recipeArray = this.loadRecipeList("recipeSearching/setRecipeList.txt");
        perf.start('search'); // starts timer
        var recipes = ingredientTester.finalRecipes;
        // for(let i = 0; i < recipes.length; i++){
        //    let recipeIngredients = recipes[i].ingredients;
        //    for(let i = 0; i < recipeIngredients.length; i++){
        //     //    recipeIngredients[i].
        //     return;
        //    }
        // }
    }
    return recipeRanker;
}());
exports.recipeRanker = recipeRanker;
