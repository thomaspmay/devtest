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
        for (var i = 0; i < recipes.length; i++) {
            var recipeIngredients = recipes[i].ingredients;
            for (var i_1 = 0; i_1 < recipeIngredients.length; i_1++) {
                var score = 5;
                var validUnit = null;
                // check if valid food found
                if (recipeIngredients[i_1].ingredient) {
                    score = 100; // couldnt find ingredient should negatively weight
                }
                // check if unit is valid
                if (this.isValidUnit(recipeIngredients[i_1].unit)) {
                    // increase base cost if valid unit was given and not enough
                    validUnit = true;
                    score += 5;
                }
                // check if quantity found
                if (recipeIngredients[i_1].quantity) {
                    // increase base cost if quantity given and not enough
                    score += 10;
                }
                //
                // if()
            }
        }
    }
    recipeRanker.prototype.isValidUnit = function (string) {
        var unitList = [];
        if (unitList.includes(string)) {
            return true;
        }
        return false;
    };
    return recipeRanker;
}());
exports.recipeRanker = recipeRanker;
