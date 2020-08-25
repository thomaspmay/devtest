"use strict";
exports.__esModule = true;
var recipeDBloader_1 = require("./recipeDBloader");
var recipeRanker_1 = require("./recipeRanking/recipeRanker");
// let ingredientTester: recipeDBloader = new recipeDBloader("yummy","v2");
// let searcherTester: recipeSearcher = new recipeSearcher();
var dbLoader = new recipeDBloader_1.recipeDBloader("yummy", "v2");
var rankerTester = new recipeRanker_1.recipeRanker(dbLoader);
