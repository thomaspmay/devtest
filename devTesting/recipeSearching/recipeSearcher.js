"use strict";
exports.__esModule = true;
exports.recipeSearcher = exports.searchRank = void 0;
var filesys = require('fs');
var readline = require('readline');
var perf = require('execution-time')();
// lev
var lev = require('fastest-levenshtein').lev;
// dice coefficient
var dice = require('string-similarity');
// var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed'); 
// var matches = stringSimilarity.findBestMatch('healed', ['edward', 'sealed', 'theatre']);
var dice = require('dice-coefficient');
// jaro-winkler
var jaro = require('jaro-winkler');
// distance('MARTHA', 'MARTHA'); 1
// distance('mArThA', 'MaRtHa', { caseSensitive: false });
// cosine similarity
var similarity = require('string-cosine-similarity');
/************user variables******************/
var searchRank = /** @class */ (function () {
    function searchRank() {
    }
    return searchRank;
}());
exports.searchRank = searchRank;
var recipeSearcher = /** @class */ (function () {
    function recipeSearcher() {
        this.run();
    }
    recipeSearcher.prototype.run = function () {
        var searchQuery = "chicken";
        var recipeArray = this.loadRecipeList("setRecipeList.txt");
        perf.start('search'); // starts timer
        var searchResults = [];
        for (var i = 0; i < recipeArray.length; i++) {
            var fullString = recipeArray[i];
            var removedNumbers = fullString.replace(/[0-9]/g, "");
            var processedString = removedNumbers.replace(":", "");
            // tokenise on spaces
            var tokensWithSpaces = processedString.split(/(\s+)/);
            var tokens = [];
            for (var _i = 0, tokensWithSpaces_1 = tokensWithSpaces; _i < tokensWithSpaces_1.length; _i++) {
                var i_1 = tokensWithSpaces_1[_i];
                if (i_1 == " ") {
                    console.log("weird space found");
                    i_1.replace(/(\s+)/, "");
                }
                else {
                    i_1 && tokens.push(i_1);
                }
            }
            var tokenScores = [];
            // for each token, string match
            for (var j = 0; j < tokens.length; j++) {
                tokenScores.push(this.matchToken(tokens[j], searchQuery));
            }
            // add and divide by length to give score
            var sum = tokenScores.reduce(function (a, b) {
                return a + b;
            }, 0);
            var total = sum / tokenScores.length;
            var entry = {
                total: total,
                rank: null,
                original: processedString,
                tokens: tokens,
                tokenScores: tokenScores
            };
            searchResults.push(entry);
        }
        // rank each query
        searchResults.sort(function (a, b) {
            if (a.total < b.total)
                return -1;
            if (a.total > b.total)
                return 1;
            return 0;
        });
        // once sorted, give rank for output
        for (var i = 0; i < searchResults.length; i++) {
            searchResults[i].rank = i;
        }
        console.log(searchResults);
        var results = perf.stop('search'); //stops timer
        console.log(results);
    };
    recipeSearcher.prototype.matchToken = function (token, searchQuery) {
        // lev
        return lev(token, searchQuery);
        // Dice's Coefficient
        return;
    };
    recipeSearcher.prototype.loadRecipeList = function (file) {
        var recipeTitles = filesys.readFileSync(file, 'utf8').toString().split('\n');
        console.log(recipeTitles);
        return recipeTitles;
    };
    ;
    return recipeSearcher;
}());
exports.recipeSearcher = recipeSearcher;
