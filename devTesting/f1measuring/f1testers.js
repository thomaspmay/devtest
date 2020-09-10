"use strict";
exports.__esModule = true;
exports.f1tester = void 0;
// const Ingreedyv2 = require('ingreedy-js');
var Ingreedyv1 = require('ingreedie');
var ingredientParser = require('ingredients-parser');
var ing = require('ingredientparser');
var filesys = require('fs');
var readline = require('readline');
/************user variables******************/
// const maxRecipes = 27638
var maxRecipes = 100;
var f1tester = /** @class */ (function () {
    function f1tester() {
        this.unitTypes = ['weight', 'volume', 'misc'];
        this.possibleUnitLists = [
            ["gram", "kilogram", "ounce", "pound"],
            ["cup", "teaspoon", "tablespoon", "pint", "liter", "milliliter", "cm3", "mm3", "m3", "can"],
            ["", "unkown", "clove", "large", "medium", "small", "stick", "package", "bag", "pinch", "slice", "quart", "piece", "box"]
        ];
        this.verifiedUnits = ["cup", "teaspoon", null, "tablespoon", "pound", "ounce", "clove", "large", "medium", "stick", "package",
            "can", "kilogram", "pinch", "slice", "small", "bag", "quart", "piece", "pint", "gram", "milliliter", "box", "gallon", "liter"];
        var array = filesys.readFileSync("./nyt-ingredients-snapshot-2015.csv", 'utf8').toString().split('\n');
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var line = array_1[_i];
            var splitLine = line.split(',');
            var testCase = {
                index: splitLine[0],
                input: splitLine[1],
                name: splitLine[2],
                qty: splitLine[3],
                unit: splitLine[4],
                Comment: splitLine[5]
            };
            console.log(testCase);
        }
    }
    return f1tester;
}());
exports.f1tester = f1tester;
var searcherTester = new f1tester();
