"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.recipeDBloader = void 0;
var recipe_ingredient_parser_v2_1 = require("recipe-ingredient-parser-v2");
// const Ingreedyv2 = require('ingreedy-js');
var Ingreedyv1 = require('ingreedie');
var ingredientParser = require('ingredients-parser');
var ing = require('ingredientparser');
var filesys = require('fs');
var readline = require('readline');
/************user variables******************/
// const maxRecipes = 27638
var maxRecipes = 100;
var recipeDBloader = /** @class */ (function () {
    function recipeDBloader(dbType, parserType) {
        this.folder = "recipesRaw";
        this.titles = [];
        this.ids = [];
        this.unitTypes = ['weight', 'volume', 'misc'];
        this.possibleUnitLists = [
            ["gram", "kilogram", "ounce", "pound"],
            ["cup", "teaspoon", "tablespoon", "pint", "liter", "milliliter", "cm3", "mm3", "m3", "can"],
            ["", "unkown", "clove", "large", "medium", "small", "stick", "package", "bag", "pinch", "slice", "quart", "piece", "box"]
        ];
        this.verifiedUnits = ["cup", "teaspoon", null, "tablespoon", "pound", "ounce", "clove", "large", "medium", "stick", "package",
            "can", "kilogram", "pinch", "slice", "small", "bag", "quart", "piece", "pint", "gram", "milliliter", "box", "gallon", "liter"];
        if (dbType == "yummy") {
            this.loadYummyDB();
        }
        else {
            throw console.error("Unkown recipe DB loader instructions");
        }
        switch (parserType) {
            case "v2":
                this.parser == recipe_ingredient_parser_v2_1.parse;
                this.parserName = "v2";
            case "Ingreedyv1":
                this.parser = Ingreedyv1;
                this.parserName = "Ingreedyv1";
            // case "Ingreedyv2":
            //     this.parser = Ingreedyv2;
            //     this.parserName = "Ingreedyv2";
            case "ingredients-parser": // fork of ingreedyjs project
                this.parser = ingredientParser;
                this.parserName = "ingredients-parser";
            case "jdarling":
                this.parser = ing;
                this.parserName = 'ingredientparser';
            default:
                console.error("ERROR Unknown parser");
        }
    }
    recipeDBloader.prototype.loadYummyDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var recipes, recipeNames, idTitleObject, possibleIngredients, _loop_1, this_1, counter, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        recipes = [];
                        recipeNames = this.folder + "/" + "recipeNames.txt";
                        return [4 /*yield*/, this.loadAndParseFile(recipeNames)];
                    case 1:
                        idTitleObject = _a.sent();
                        this.titles = idTitleObject.titles;
                        this.ids = idTitleObject.ids;
                        possibleIngredients = [];
                        _loop_1 = function (i) {
                            var fileAsString = filesys.readFileSync(this_1.folder + "/recipeMetadata/meta" + this_1.ids[i] + ".json", 'utf8').toString();
                            try {
                                var metadata = JSON.parse(fileAsString);
                                var unprocessedRecipe_1 = {
                                    id: i,
                                    title: metadata.name,
                                    description: metadata.attribution.text,
                                    unproIngredients: metadata.ingredientLines,
                                    ingredients: null,
                                    instructions: null,
                                    tags: metadata.attributes,
                                    image: "img" + this_1.ids[i] + ".jpg"
                                };
                                // console.log(i + ":" + unprocessedRecipe.title);
                                var ingredients_1 = [];
                                counter = 0;
                                metadata.ingredientLines.forEach(function (line) {
                                    var parsedIngredient;
                                    try {
                                        counter += 1;
                                        parsedIngredient = recipe_ingredient_parser_v2_1.parse(line);
                                        // console.log(line);
                                        // console.log(parsedIngredient);
                                        parsedIngredient.ingredientId = counter;
                                        for (var i = 0; i < _this.unitTypes.length; i++) {
                                            for (var j = 0; j < _this.possibleUnitLists[i].length; j++) {
                                                if (_this.possibleUnitLists[i][j] == parsedIngredient.unit) {
                                                    parsedIngredient.unitTypeId = i;
                                                    parsedIngredient.unitId = j;
                                                }
                                                else if (parsedIngredient.unit == null) {
                                                    parsedIngredient.unitTypeId = 2;
                                                    parsedIngredient.unitId = 0;
                                                }
                                            }
                                        }
                                        parsedIngredient.importance = _this.calculateImportance(parsedIngredient, unprocessedRecipe_1);
                                        ingredients_1.push(parsedIngredient);
                                    }
                                    catch (e) {
                                        console.error(e);
                                    }
                                    unprocessedRecipe_1.ingredients = ingredients_1;
                                });
                                recipes.push(unprocessedRecipe_1);
                            }
                            catch (e) {
                                console.error(e);
                            }
                            this_1.finalRecipes = recipes;
                        };
                        this_1 = this;
                        // for(let i = 0; i < maxRecipes && i < idTitleObject.ids.length - 1; i ++){
                        for (i = 0; i < idTitleObject.ids.length - 1; i++) {
                            _loop_1(i);
                        }
                        filesys.writeFileSync("mockRecipes.txt", JSON.stringify(recipes));
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    recipeDBloader.prototype.calculateImportance = function (parsedIngredient, unprocessedRecipe) {
        // is ingredient in title - return 10
        return 5;
        // tf-ifd of ingredients - return 4-8 based on score
        // is it a condiment - return 2
    };
    // checks for duplicates
    // let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    // console.log(findDuplicates(titles)) // All duplicates
    //   ids.forEach(id => {
    //       filesys.
    //   });
    // console.log(this.titles);
    // console.log(this.ids);
    recipeDBloader.prototype.loadAndParseFile = function (recipeNames) {
        try {
            var array = filesys.readFileSync(recipeNames, 'utf8').toString().split('\n');
            var titles_1 = [];
            var ids_1 = [];
            array.forEach(function (line) {
                if (line != "" || line == undefined) {
                    var split = line.split('\t');
                    var untrimmedId = split[1];
                    if (untrimmedId != undefined) {
                        var id = untrimmedId.trim();
                    }
                    else {
                        var id = untrimmedId;
                    }
                    var untrimmedName = split[0];
                    if (untrimmedName != undefined) {
                        var name = untrimmedName.trim();
                    }
                    else {
                        var name = untrimmedName;
                    }
                    var removedNumbers = name.replace(/[0-9]/g, "");
                    var processedName = removedNumbers.replace(/-/g, " ");
                    titles_1.push(processedName);
                    ids_1.push(id);
                }
            });
            return { "ids": ids_1, "titles": titles_1 };
        }
        catch (e) {
            console.error(e);
        }
    };
    return recipeDBloader;
}());
exports.recipeDBloader = recipeDBloader;
