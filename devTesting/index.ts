import { recipeDBloader } from "./recipeDBloader";
import { recipeSearcher } from "./recipeSearching/recipeSearcher";
import { recipeRanker } from "./recipeRanking/recipeRanker";

// let ingredientTester: recipeDBloader = new recipeDBloader("yummy","v2");
// let searcherTester: recipeSearcher = new recipeSearcher();
let dbLoader: recipeDBloader = new recipeDBloader("yummy","v2");
let rankerTester: recipeRanker = new recipeRanker(dbLoader);
