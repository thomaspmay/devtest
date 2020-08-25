const filesys = require('fs');
const readline = require('readline');

const perf = require('execution-time')();

// lev
const {lev} = require('fastest-levenshtein');

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
        let searchQuery: string = "chicken";
        let recipeArray = this.loadRecipeList("setRecipeList.txt");
        perf.start('search'); // starts timer
        const searchResults:searchRank[] = []; 
        for(let i = 0; i < recipeArray.length; i++){
            let fullString: string = recipeArray[i];
            let removedNumbers: string = fullString.replace(/[0-9]/g, "");
            let processedString: string = removedNumbers.replace(":","");
            // tokenise on spaces
            let tokensWithSpaces: string[] = processedString.split(/(\s+)/);
            let tokens = [];
            for(let i of tokensWithSpaces){
                if(i == " "){
                    console.log("weird space found");
                    i.replace(/(\s+)/,"");
                } else {
                    i && tokens.push(i);
                }
            }
                
            let tokenScores: number[] = [];
            // for each token, string match
            for(let j = 0; j < tokens.length; j++){
               tokenScores.push(this.matchToken(tokens[j],searchQuery)) 
            }
            // add and divide by length to give score
            let sum: number = tokenScores.reduce(function(a, b){
                return a + b;
            }, 0);
            let total = sum/tokenScores.length;
            let entry: searchRank = {
                total: total,
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
        console.log(searchResults);
        const results = perf.stop('search'); //stops timer
        console.log(results);
    }

    matchToken(token: string, searchQuery: string){
        // lev
        return lev(token,searchQuery);

        // Dice's Coefficient
        return 
    }
    
    loadRecipeList(file: string){
        let recipeTitles:string[] = filesys.readFileSync(file, 'utf8').toString().split('\n');
        console.log(recipeTitles);
        return recipeTitles;
    };
}
