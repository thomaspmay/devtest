"use strict";
exports.__esModule = true;
exports.recipeSearcher = exports.searchRank = void 0;
var filesys = require('fs');
var readline = require('readline');
var perf = require('execution-time')();
// lev
var leven = require('leven');
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
        var searchQueries = ["Chicken", "Chicken Salad", "Curry", "Mushroom Soup", "Mushroom", "Chocolat", "Apples", "Italien Metball"];
        for (var _i = 0, searchQueries_1 = searchQueries; _i < searchQueries_1.length; _i++) {
            var searchQuery = searchQueries_1[_i];
            var recipeArray = this.loadRecipeList("setRecipeList.txt");
            perf.start('search'); // starts timer
            var searchResults = [];
            for (var i = 0; i < recipeArray.length; i++) {
                var fullString = recipeArray[i];
                var removedNumbers = fullString.replace(/[0-9]/g, "");
                var processedString = removedNumbers.replace(":", "");
                var tokens = [];
                // tokenise title on spaces - remove block for full string implementations
                // let tokensWithSpaces: string[] = processedString.split(/(\s+)/);
                // for(let i of tokensWithSpaces){
                //     if(i == " "){
                //         console.log("weird space found");
                //         i.replace(/(\s+)/,"");
                //     } else {
                //         i && tokens.push(i);
                //     }
                // }
                // if don't title tokenise on spaces, set tokens array with single string
                tokens.push(processedString);
                var queryTokens = [];
                // tokenise on spaces - remove block for full string implementations
                // let queryTokensWithSpaces: string[] = searchQuery.split(/(\s+)/);
                // for(let i of queryTokensWithSpaces){
                //     if(i == " "){
                //         console.log("weird space found");
                //         i.replace(/(\s+)/,"");
                //     } else {
                //         i && queryTokens.push(i);
                //     }
                // }
                // if don't title tokenise on spaces, set tokens array with single string
                queryTokens.push(searchQuery);
                // for each token, string match
                var tokenScores = [];
                for (var j = 0; j < tokens.length; j++) {
                    for (var m = 0; m < queryTokens.length; m++) {
                        tokenScores.push(this.matchStrings(tokens[j].toUpperCase(), queryTokens[m].toUpperCase()));
                    }
                }
                // add and divide by length to give score
                var sum = tokenScores.reduce(function (a, b) {
                    return a + b;
                }, 0);
                var total = sum / tokenScores.length;
                // alternatively take lowest value
                // var minScore = 1000;
                // for(let i = 0; i < tokenScores.length; i++){
                // if(tokenScores[i] < minScore){
                // minScore = tokenScores[i];
                // }
                // }
                var entry = {
                    total: total,
                    // total: minScore,
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
            var results = perf.stop('search'); //stops timer
            console.log(searchResults);
            console.log(results);
            var outputFolder = "./levFullStrings/";
            var outputFile = outputFolder + searchQuery + ".txt";
            if (!filesys.existsSync(outputFolder)) {
                filesys.mkdirSync(outputFolder);
            }
            filesys.writeFileSync(outputFile, JSON.stringify(searchResults, null, 4));
        }
    };
    recipeSearcher.prototype.matchStrings = function (token, searchQuery) {
        // lev
        return leven(token, searchQuery);
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
