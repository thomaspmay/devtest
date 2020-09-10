const filesys = require('fs');
const readline = require('readline');

const perf = require('execution-time')();

// lev
const leven = require('leven');

// dice coefficient
var dice = require('string-similarity');
// var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed'); 
// var matches = stringSimilarity.findBestMatch('healed', ['edward', 'sealed', 'theatre']);

var dice = require('dice-coefficient')


// jaro-winkler
var jaro = require('jaro-winkler');
// distance('MARTHA', 'MARTHA'); 1
// distance('mArThA', 'MaRtHa', { caseSensitive: false });

// cosine similarity
var similarity = require('string-cosine-similarity')

const stringComparison = require('string-comparison');




/************user variables******************/

export class searchRank {
    total: number
    rank: number
    original: string
    tokens: string[]
    tokenScores: number[]
}

export class recipeSearcher {
    
    constructor(){
        this.run()
        
    }

    run(){
        var searchQueries: string[] = ["Chicken","Chicken Salad","Curry","Mushroom Soup","Mushroom","Chocolat","Apples","Italien Metball"];
        for(var searchQuery of searchQueries){
            let recipeArray = this.loadRecipeList("setRecipeList.txt");
            perf.start('search'); // starts timer
            
            let fullStringResults = this.fullStringRank(recipeArray,searchQuery)
            let avgTokenTitleResults = this.AvgTokenTitleRank(recipeArray,searchQuery)
            let avgTokenBothResults = this.AvgTokenBothRank(recipeArray,searchQuery)
            let lowestMatchResults = this.LowestMatchedRank(recipeArray,searchQuery)
            let numMatcheResults = this.NumberMatches75percent(recipeArray,searchQuery)
            
            // rank each query
            fullStringResults.sort((a, b) => {
                if (a.total < b.total) return -1;
                if (a.total > b.total) return 1;
                return 0;
            });

            avgTokenTitleResults.sort((a, b) => {
                if (a.total < b.total) return -1;
                if (a.total > b.total) return 1;
                return 0;
            });

            avgTokenBothResults.sort((a, b) => {
                if (a.total < b.total) return -1;
                if (a.total > b.total) return 1;
                return 0;
            });

            lowestMatchResults.sort((a, b) => {
                if (a.total < b.total) return -1;
                if (a.total > b.total) return 1;
                return 0;
            });

            // reverse for number of matched tokens
            numMatcheResults.sort((a, b) => {
                if (a.total < b.total) return 1;
                if (a.total > b.total) return -1;
                return 0;
            });
            // once sorted, give rank for output
            for(let i = 0; i < fullStringResults.length; i++){
                fullStringResults[i].rank = i;
            }
            for(let i = 0; i < avgTokenTitleResults.length; i++){
                avgTokenTitleResults[i].rank = i;
            }
            for(let i = 0; i < avgTokenBothResults.length; i++){
                avgTokenBothResults[i].rank = i;
            }
            for(let i = 0; i < lowestMatchResults.length; i++){
                lowestMatchResults[i].rank = i;
            }
            for(let i = 0; i < numMatcheResults.length; i++){
                numMatcheResults[i].rank = i;
            }
            
            const results = perf.stop('search'); //stops timer
            let outputFolder = "./jarowink/";
            if(!filesys.existsSync(outputFolder)){
                filesys.mkdirSync(outputFolder);
            }
            if(!filesys.existsSync(outputFolder+"full/")){
                filesys.mkdirSync(outputFolder+"full/");
            }
            if(!filesys.existsSync(outputFolder+"title/")){
                filesys.mkdirSync(outputFolder+"title/");
            }
            if(!filesys.existsSync(outputFolder+"both/")){
                filesys.mkdirSync(outputFolder+"both/");
            }
            if(!filesys.existsSync(outputFolder+"best/")){
                filesys.mkdirSync(outputFolder+"best/");
            }
            if(!filesys.existsSync(outputFolder+"most/")){
                filesys.mkdirSync(outputFolder+"most/");
            }
            
            filesys.writeFileSync(outputFolder+"full/"+searchQuery,JSON.stringify(fullStringResults, null, 4));
            filesys.writeFileSync(outputFolder+"title/"+searchQuery,JSON.stringify(avgTokenTitleResults, null, 4));
            filesys.writeFileSync(outputFolder+"both/"+searchQuery,JSON.stringify(avgTokenBothResults, null, 4));
            filesys.writeFileSync(outputFolder+"best/"+searchQuery,JSON.stringify(lowestMatchResults, null, 4));
            filesys.writeFileSync(outputFolder+"most/"+searchQuery,JSON.stringify(numMatcheResults, null, 4));
        }   
    }

    fullStringRank(recipeArray, searchQuery): searchRank[]{
        const searchResults:searchRank[] = []; 
            for(let i = 0; i < recipeArray.length; i++){
                let fullString: string = recipeArray[i];
                let removedNumbers: string = fullString.replace(/[0-9]/g, "");
                let processedString: string = removedNumbers.replace(":","");
                
                let tokens = [];
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
                
                let queryTokens = [];
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
                let tokenScores: number[] = [];
                for(var j = 0; j < tokens.length; j++){
                    for(var m = 0; m < queryTokens.length; m++){
                        tokenScores.push(this.matchStrings(tokens[j].toUpperCase(),queryTokens[m].toUpperCase())); 
                    }
                }
                
                // add and divide by length to give score
                let sum: number = tokenScores.reduce(function(a, b){
                    return a + b;
                }, 0);
                let total = sum/tokenScores.length;

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

                let entry: searchRank = {
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
    }

    AvgTokenTitleRank(recipeArray, searchQuery): searchRank[]{
        const searchResults:searchRank[] = []; 
            for(let i = 0; i < recipeArray.length; i++){
                let fullString: string = recipeArray[i];
                let removedNumbers: string = fullString.replace(/[0-9]/g, "");
                let processedString: string = removedNumbers.replace(":","");
                
                let tokens = [];
                // tokenise title on spaces - remove block for full string implementations
                let tokensWithSpaces: string[] = processedString.split(/(\s+)/);
                for(let i of tokensWithSpaces){
                    if(i == " "){
                        i.replace(/(\s+)/,"");
                    } else {
                        i && tokens.push(i);
                    }
                }
                // if don't title tokenise on spaces, set tokens array with single string
                // tokens.push(processedString);
                
                let queryTokens = [];
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
                let tokenScores: number[] = [];
                for(var j = 0; j < tokens.length; j++){
                    for(var m = 0; m < queryTokens.length; m++){
                        tokenScores.push(this.matchStrings(tokens[j].toUpperCase(),queryTokens[m].toUpperCase())); 
                    }
                }
                
                // add and divide by length to give score
                let sum: number = tokenScores.reduce(function(a, b){
                    return a + b;
                }, 0);
                let total = sum/tokenScores.length;

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

                let entry: searchRank = {
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
    }

    AvgTokenBothRank(recipeArray, searchQuery): searchRank[]{
        const searchResults:searchRank[] = []; 
            for(let i = 0; i < recipeArray.length; i++){
                let fullString: string = recipeArray[i];
                let removedNumbers: string = fullString.replace(/[0-9]/g, "");
                let processedString: string = removedNumbers.replace(":","");
                
                let tokens = [];
                // tokenise title on spaces - remove block for full string implementations
                let tokensWithSpaces: string[] = processedString.split(/(\s+)/);
                for(let i of tokensWithSpaces){
                    if(i == " "){
                        i.replace(/(\s+)/,"");
                    } else {
                        i && tokens.push(i);
                    }
                }
                // if don't title tokenise on spaces, set tokens array with single string
                // tokens.push(processedString);
                
                let queryTokens = [];
                // tokenise on spaces - remove block for full string implementations
                let queryTokensWithSpaces: string[] = searchQuery.split(/(\s+)/);
                for(let i of queryTokensWithSpaces){
                    if(i == " "){
                        i.replace(/(\s+)/,"");
                    } else {
                        i && queryTokens.push(i);
                    }
                }

                // if don't title tokenise on spaces, set tokens array with single string
                // queryTokens.push(searchQuery);

                // for each token, string match
                let tokenScores: number[] = [];
                for(var j = 0; j < tokens.length; j++){
                    for(var m = 0; m < queryTokens.length; m++){
                        tokenScores.push(this.matchStrings(tokens[j].toUpperCase(),queryTokens[m].toUpperCase())); 
                    }
                }
                
                // add and divide by length to give score
                let sum: number = tokenScores.reduce(function(a, b){
                    return a + b;
                }, 0);
                let total = sum/tokenScores.length;

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

                let entry: searchRank = {
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
    }

    LowestMatchedRank(recipeArray, searchQuery): searchRank[]{
        const searchResults:searchRank[] = []; 
            for(let i = 0; i < recipeArray.length; i++){
                let fullString: string = recipeArray[i];
                let removedNumbers: string = fullString.replace(/[0-9]/g, "");
                let processedString: string = removedNumbers.replace(":","");
                
                let tokens = [];
                // tokenise title on spaces - remove block for full string implementations
                let tokensWithSpaces: string[] = processedString.split(/(\s+)/);
                for(let i of tokensWithSpaces){
                    if(i == " "){
                        i.replace(/(\s+)/,"");
                    } else {
                        i && tokens.push(i);
                    }
                }
                // if don't title tokenise on spaces, set tokens array with single string
                // tokens.push(processedString);
                
                let queryTokens = [];
                // tokenise on spaces - remove block for full string implementations
                let queryTokensWithSpaces: string[] = searchQuery.split(/(\s+)/);
                for(let i of queryTokensWithSpaces){
                    if(i == " "){
                        i.replace(/(\s+)/,"");
                    } else {
                        i && queryTokens.push(i);
                    }
                }

                // if don't title tokenise on spaces, set tokens array with single string
                // queryTokens.push(searchQuery);

                // for each token, string match
                let tokenScores: number[] = [];
                for(var j = 0; j < tokens.length; j++){
                    for(var m = 0; m < queryTokens.length; m++){
                        tokenScores.push(this.matchStrings(tokens[j].toUpperCase(),queryTokens[m].toUpperCase())); 
                    }
                }
                
                // add and divide by length to give score
                // let sum: number = tokenScores.reduce(function(a, b){
                //     return a + b;
                // }, 0);
                // let total = sum/tokenScores.length;

                // alternatively take lowest value
                var minScore = 1000;
                for(let i = 0; i < tokenScores.length; i++){
                    if(tokenScores[i] < minScore){
                        minScore = tokenScores[i];
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

                let entry: searchRank = {
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
    }

    NumberMatches75percent(recipeArray, searchQuery): searchRank[]{
        const searchResults:searchRank[] = []; 
            for(let i = 0; i < recipeArray.length; i++){
                let fullString: string = recipeArray[i];
                let removedNumbers: string = fullString.replace(/[0-9]/g, "");
                let processedString: string = removedNumbers.replace(":","");
                
                let tokens = [];
                // tokenise title on spaces - remove block for full string implementations
                let tokensWithSpaces: string[] = processedString.split(/(\s+)/);
                for(let i of tokensWithSpaces){
                    if(i == " "){
                        i.replace(/(\s+)/,"");
                    } else {
                        i && tokens.push(i);
                    }
                }
                // if don't title tokenise on spaces, set tokens array with single string
                // tokens.push(processedString);
                
                let queryTokens = [];
                // tokenise on spaces - remove block for full string implementations
                let queryTokensWithSpaces: string[] = searchQuery.split(/(\s+)/);
                for(let i of queryTokensWithSpaces){
                    if(i == " "){
                        i.replace(/(\s+)/,"");
                    } else {
                        i && queryTokens.push(i);
                    }
                }

                // if don't title tokenise on spaces, set tokens array with single string
                // queryTokens.push(searchQuery);

                // for each token, string match
                let tokenScores: number[] = [];
                for(var j = 0; j < tokens.length; j++){
                    for(var m = 0; m < queryTokens.length; m++){
                        tokenScores.push(this.matchStrings(tokens[j].toUpperCase(),queryTokens[m].toUpperCase())); 
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
                let numMatches = 0;
                let requiredDistance = 0.75;
                for(let i = 0; i < tokenScores.length; i++){
                    if(tokenScores[i] < requiredDistance){
                        numMatches += 1;
                    }
                }

                let entry: searchRank = {
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
    }

    matchStrings(token: string, searchQuery: string){
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

        let result = jaro(token,searchQuery);
        console.log(result)
        return 1 - result;
    }
    
    loadRecipeList(file: string){
        let recipeTitles:string[] = filesys.readFileSync(file, 'utf8').toString().split('\n');
        console.log(recipeTitles);
        return recipeTitles;
    };
}
