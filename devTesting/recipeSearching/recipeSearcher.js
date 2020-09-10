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
var stringComparison = require('string-comparison');
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
            var fullStringResults = this.fullStringRank(recipeArray, searchQuery);
            var avgTokenTitleResults = this.AvgTokenTitleRank(recipeArray, searchQuery);
            var avgTokenBothResults = this.AvgTokenBothRank(recipeArray, searchQuery);
            var lowestMatchResults = this.LowestMatchedRank(recipeArray, searchQuery);
            var numMatcheResults = this.NumberMatches75percent(recipeArray, searchQuery);
            // rank each query
            fullStringResults.sort(function (a, b) {
                if (a.total < b.total)
                    return -1;
                if (a.total > b.total)
                    return 1;
                return 0;
            });
            avgTokenTitleResults.sort(function (a, b) {
                if (a.total < b.total)
                    return -1;
                if (a.total > b.total)
                    return 1;
                return 0;
            });
            avgTokenBothResults.sort(function (a, b) {
                if (a.total < b.total)
                    return -1;
                if (a.total > b.total)
                    return 1;
                return 0;
            });
            lowestMatchResults.sort(function (a, b) {
                if (a.total < b.total)
                    return -1;
                if (a.total > b.total)
                    return 1;
                return 0;
            });
            // reverse for number of matched tokens
            numMatcheResults.sort(function (a, b) {
                if (a.total < b.total)
                    return 1;
                if (a.total > b.total)
                    return -1;
                return 0;
            });
            // once sorted, give rank for output
            for (var i = 0; i < fullStringResults.length; i++) {
                fullStringResults[i].rank = i;
            }
            for (var i = 0; i < avgTokenTitleResults.length; i++) {
                avgTokenTitleResults[i].rank = i;
            }
            for (var i = 0; i < avgTokenBothResults.length; i++) {
                avgTokenBothResults[i].rank = i;
            }
            for (var i = 0; i < lowestMatchResults.length; i++) {
                lowestMatchResults[i].rank = i;
            }
            for (var i = 0; i < numMatcheResults.length; i++) {
                numMatcheResults[i].rank = i;
            }
            var results = perf.stop('search'); //stops timer
            var outputFolder = "./jarowink/";
            if (!filesys.existsSync(outputFolder)) {
                filesys.mkdirSync(outputFolder);
            }
            if (!filesys.existsSync(outputFolder + "full/")) {
                filesys.mkdirSync(outputFolder + "full/");
            }
            if (!filesys.existsSync(outputFolder + "title/")) {
                filesys.mkdirSync(outputFolder + "title/");
            }
            if (!filesys.existsSync(outputFolder + "both/")) {
                filesys.mkdirSync(outputFolder + "both/");
            }
            if (!filesys.existsSync(outputFolder + "best/")) {
                filesys.mkdirSync(outputFolder + "best/");
            }
            if (!filesys.existsSync(outputFolder + "most/")) {
                filesys.mkdirSync(outputFolder + "most/");
            }
            filesys.writeFileSync(outputFolder + "full/" + searchQuery, JSON.stringify(fullStringResults, null, 4));
            filesys.writeFileSync(outputFolder + "title/" + searchQuery, JSON.stringify(avgTokenTitleResults, null, 4));
            filesys.writeFileSync(outputFolder + "both/" + searchQuery, JSON.stringify(avgTokenBothResults, null, 4));
            filesys.writeFileSync(outputFolder + "best/" + searchQuery, JSON.stringify(lowestMatchResults, null, 4));
            filesys.writeFileSync(outputFolder + "most/" + searchQuery, JSON.stringify(numMatcheResults, null, 4));
        }
    };
    recipeSearcher.prototype.fullStringRank = function (recipeArray, searchQuery) {
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
            //     if(tokenScores[i] < minScore){
            //         minScore = tokenScores[i];
            //     }
            // }
            // finds number of matches
            // let numMatches = 0;
            // let requiredDistance = 5;
            // for(let i = 0; i < tokenScores.length; i++){
            //     if(tokenScores[i] < requiredDistance){
            //         numMatches += 1;
            //     }
            // }
            var entry = {
                total: total,
                // total: minScore,
                // total: numMatches,
                rank: null,
                original: processedString,
                tokens: tokens,
                tokenScores: tokenScores
            };
            searchResults.push(entry);
        }
        return searchResults;
    };
    recipeSearcher.prototype.AvgTokenTitleRank = function (recipeArray, searchQuery) {
        var searchResults = [];
        for (var i = 0; i < recipeArray.length; i++) {
            var fullString = recipeArray[i];
            var removedNumbers = fullString.replace(/[0-9]/g, "");
            var processedString = removedNumbers.replace(":", "");
            var tokens = [];
            // tokenise title on spaces - remove block for full string implementations
            var tokensWithSpaces = processedString.split(/(\s+)/);
            for (var _i = 0, tokensWithSpaces_1 = tokensWithSpaces; _i < tokensWithSpaces_1.length; _i++) {
                var i_1 = tokensWithSpaces_1[_i];
                if (i_1 == " ") {
                    i_1.replace(/(\s+)/, "");
                }
                else {
                    i_1 && tokens.push(i_1);
                }
            }
            // if don't title tokenise on spaces, set tokens array with single string
            // tokens.push(processedString);
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
            //     if(tokenScores[i] < minScore){
            //         minScore = tokenScores[i];
            //     }
            // }
            // finds number of matches
            // let numMatches = 0;
            // let requiredDistance = 5;
            // for(let i = 0; i < tokenScores.length; i++){
            //     if(tokenScores[i] < requiredDistance){
            //         numMatches += 1;
            //     }
            // }
            var entry = {
                total: total,
                // total: minScore,
                // total: numMatches,
                rank: null,
                original: processedString,
                tokens: tokens,
                tokenScores: tokenScores
            };
            searchResults.push(entry);
        }
        return searchResults;
    };
    recipeSearcher.prototype.AvgTokenBothRank = function (recipeArray, searchQuery) {
        var searchResults = [];
        for (var i = 0; i < recipeArray.length; i++) {
            var fullString = recipeArray[i];
            var removedNumbers = fullString.replace(/[0-9]/g, "");
            var processedString = removedNumbers.replace(":", "");
            var tokens = [];
            // tokenise title on spaces - remove block for full string implementations
            var tokensWithSpaces = processedString.split(/(\s+)/);
            for (var _i = 0, tokensWithSpaces_2 = tokensWithSpaces; _i < tokensWithSpaces_2.length; _i++) {
                var i_2 = tokensWithSpaces_2[_i];
                if (i_2 == " ") {
                    i_2.replace(/(\s+)/, "");
                }
                else {
                    i_2 && tokens.push(i_2);
                }
            }
            // if don't title tokenise on spaces, set tokens array with single string
            // tokens.push(processedString);
            var queryTokens = [];
            // tokenise on spaces - remove block for full string implementations
            var queryTokensWithSpaces = searchQuery.split(/(\s+)/);
            for (var _a = 0, queryTokensWithSpaces_1 = queryTokensWithSpaces; _a < queryTokensWithSpaces_1.length; _a++) {
                var i_3 = queryTokensWithSpaces_1[_a];
                if (i_3 == " ") {
                    i_3.replace(/(\s+)/, "");
                }
                else {
                    i_3 && queryTokens.push(i_3);
                }
            }
            // if don't title tokenise on spaces, set tokens array with single string
            // queryTokens.push(searchQuery);
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
            //     if(tokenScores[i] < minScore){
            //         minScore = tokenScores[i];
            //     }
            // }
            // finds number of matches
            // let numMatches = 0;
            // let requiredDistance = 5;
            // for(let i = 0; i < tokenScores.length; i++){
            //     if(tokenScores[i] < requiredDistance){
            //         numMatches += 1;
            //     }
            // }
            var entry = {
                total: total,
                // total: minScore,
                // total: numMatches,
                rank: null,
                original: processedString,
                tokens: tokens,
                tokenScores: tokenScores
            };
            searchResults.push(entry);
        }
        return searchResults;
    };
    recipeSearcher.prototype.LowestMatchedRank = function (recipeArray, searchQuery) {
        var searchResults = [];
        for (var i = 0; i < recipeArray.length; i++) {
            var fullString = recipeArray[i];
            var removedNumbers = fullString.replace(/[0-9]/g, "");
            var processedString = removedNumbers.replace(":", "");
            var tokens = [];
            // tokenise title on spaces - remove block for full string implementations
            var tokensWithSpaces = processedString.split(/(\s+)/);
            for (var _i = 0, tokensWithSpaces_3 = tokensWithSpaces; _i < tokensWithSpaces_3.length; _i++) {
                var i_4 = tokensWithSpaces_3[_i];
                if (i_4 == " ") {
                    i_4.replace(/(\s+)/, "");
                }
                else {
                    i_4 && tokens.push(i_4);
                }
            }
            // if don't title tokenise on spaces, set tokens array with single string
            // tokens.push(processedString);
            var queryTokens = [];
            // tokenise on spaces - remove block for full string implementations
            var queryTokensWithSpaces = searchQuery.split(/(\s+)/);
            for (var _a = 0, queryTokensWithSpaces_2 = queryTokensWithSpaces; _a < queryTokensWithSpaces_2.length; _a++) {
                var i_5 = queryTokensWithSpaces_2[_a];
                if (i_5 == " ") {
                    i_5.replace(/(\s+)/, "");
                }
                else {
                    i_5 && queryTokens.push(i_5);
                }
            }
            // if don't title tokenise on spaces, set tokens array with single string
            // queryTokens.push(searchQuery);
            // for each token, string match
            var tokenScores = [];
            for (var j = 0; j < tokens.length; j++) {
                for (var m = 0; m < queryTokens.length; m++) {
                    tokenScores.push(this.matchStrings(tokens[j].toUpperCase(), queryTokens[m].toUpperCase()));
                }
            }
            // add and divide by length to give score
            // let sum: number = tokenScores.reduce(function(a, b){
            //     return a + b;
            // }, 0);
            // let total = sum/tokenScores.length;
            // alternatively take lowest value
            var minScore = 1000;
            for (var i_6 = 0; i_6 < tokenScores.length; i_6++) {
                if (tokenScores[i_6] < minScore) {
                    minScore = tokenScores[i_6];
                }
            }
            // finds number of matches
            // let numMatches = 0;
            // let requiredDistance = 5;
            // for(let i = 0; i < tokenScores.length; i++){
            //     if(tokenScores[i] < requiredDistance){
            //         numMatches += 1;
            //     }
            // }
            var entry = {
                // total: total,
                total: minScore,
                // total: numMatches,
                rank: null,
                original: processedString,
                tokens: tokens,
                tokenScores: tokenScores
            };
            searchResults.push(entry);
        }
        return searchResults;
    };
    recipeSearcher.prototype.NumberMatches75percent = function (recipeArray, searchQuery) {
        var searchResults = [];
        for (var i = 0; i < recipeArray.length; i++) {
            var fullString = recipeArray[i];
            var removedNumbers = fullString.replace(/[0-9]/g, "");
            var processedString = removedNumbers.replace(":", "");
            var tokens = [];
            // tokenise title on spaces - remove block for full string implementations
            var tokensWithSpaces = processedString.split(/(\s+)/);
            for (var _i = 0, tokensWithSpaces_4 = tokensWithSpaces; _i < tokensWithSpaces_4.length; _i++) {
                var i_7 = tokensWithSpaces_4[_i];
                if (i_7 == " ") {
                    i_7.replace(/(\s+)/, "");
                }
                else {
                    i_7 && tokens.push(i_7);
                }
            }
            // if don't title tokenise on spaces, set tokens array with single string
            // tokens.push(processedString);
            var queryTokens = [];
            // tokenise on spaces - remove block for full string implementations
            var queryTokensWithSpaces = searchQuery.split(/(\s+)/);
            for (var _a = 0, queryTokensWithSpaces_3 = queryTokensWithSpaces; _a < queryTokensWithSpaces_3.length; _a++) {
                var i_8 = queryTokensWithSpaces_3[_a];
                if (i_8 == " ") {
                    i_8.replace(/(\s+)/, "");
                }
                else {
                    i_8 && queryTokens.push(i_8);
                }
            }
            // if don't title tokenise on spaces, set tokens array with single string
            // queryTokens.push(searchQuery);
            // for each token, string match
            var tokenScores = [];
            for (var j = 0; j < tokens.length; j++) {
                for (var m = 0; m < queryTokens.length; m++) {
                    tokenScores.push(this.matchStrings(tokens[j].toUpperCase(), queryTokens[m].toUpperCase()));
                }
            }
            // add and divide by length to give score
            // let sum: number = tokenScores.reduce(function(a, b){
            //     return a + b;
            // }, 0);
            // let total = sum/tokenScores.length;
            // alternatively take lowest value
            // var minScore = 1000;
            // for(let i = 0; i < tokenScores.length; i++){
            //     if(tokenScores[i] < minScore){
            //         minScore = tokenScores[i];
            //     }
            // }
            // finds number of matches
            var numMatches = 0;
            var requiredDistance = 0.75;
            for (var i_9 = 0; i_9 < tokenScores.length; i_9++) {
                if (tokenScores[i_9] < requiredDistance) {
                    numMatches += 1;
                }
            }
            var entry = {
                // total: total,
                // total: minScore,
                total: numMatches,
                rank: null,
                original: processedString,
                tokens: tokens,
                tokenScores: tokenScores
            };
            searchResults.push(entry);
        }
        return searchResults;
    };
    recipeSearcher.prototype.matchStrings = function (token, searchQuery) {
        // lev
        // return leven(token,searchQuery);
        // cosine sim
        // let result = stringComparison.cosine.distance(token,searchQuery);
        // console.log(result)
        // return result;
        // Dice's Coefficient
        // let result = stringComparison.diceCoefficient.distance(token,searchQuery);
        // console.log(result)
        // return result;
        // return 
        // let result = stringComparison.jaccardIndex.distance(token,searchQuery);
        // console.log(result)
        // return result;
        var result = jaro(token, searchQuery);
        console.log(result);
        return 1 - result;
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
