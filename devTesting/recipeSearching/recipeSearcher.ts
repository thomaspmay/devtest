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
                    // if(tokenScores[i] < minScore){
                        // minScore = tokenScores[i];
                    // }
                // }

                let entry: searchRank = {
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
            searchResults.sort((a, b) => {
                if (a.total < b.total) return -1;
                if (a.total > b.total) return 1;
                return 0;
            });
            // once sorted, give rank for output
            for(let i = 0; i < searchResults.length; i++){
                searchResults[i].rank = i;
            }
            
            const results = perf.stop('search'); //stops timer
            console.log(searchResults);
            console.log(results);
            let outputFolder = "./levFullStrings/";
            let outputFile = outputFolder + searchQuery + ".txt";
            if(!filesys.existsSync(outputFolder)){
                filesys.mkdirSync(outputFolder);
            }
            filesys.writeFileSync(outputFile,JSON.stringify(searchResults, null, 4));
        }   
    }

    matchStrings(token: string, searchQuery: string){
        // lev
        return leven(token,searchQuery);

        // Dice's Coefficient
        return 
    }
    
    loadRecipeList(file: string){
        let recipeTitles:string[] = filesys.readFileSync(file, 'utf8').toString().split('\n');
        console.log(recipeTitles);
        return recipeTitles;
    };
}
