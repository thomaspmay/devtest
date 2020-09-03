"use strict";
exports.__esModule = true;
var recipeDBloader_1 = require("./recipeDBloader");
var recipeSearcher_1 = require("./recipeSearching/recipeSearcher");
var ingredientTester = new recipeDBloader_1.recipeDBloader("yummy", "v2");
var searcherTester = new recipeSearcher_1.recipeSearcher();
// let dbLoader: recipeDBloader = new recipeDBloader("yummy","v2");
// let rankerTester: recipeRanker = new recipeRanker(dbLoader);
