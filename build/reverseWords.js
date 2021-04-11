"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseWords = void 0;
var readlineSync = require('readline-sync');
var fs = require('fs');
var ReverseWords = /** @class */ (function () {
    function ReverseWords(word) {
        this.lim = { limit: /^[a-zA-Z0-9_.-]*$/ };
        word ? this.word = word : this.word = readlineSync.question('Write a word and I do magic with that? ', this.lim);
    }
    ReverseWords.prototype.reverseString = function () {
        var newString = "";
        for (var i = this.word.length - 1; i >= 0; i--) {
            newString += this.word[i];
        }
        return newString;
    };
    ReverseWords.prototype.changeUpperToLowerAndViceVersa = function (str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    };
    ReverseWords.createJsonFile = function (pathToJson, dict) {
        var data = JSON.stringify(dict, null, 2);
        fs.writeFileSync(pathToJson, data, function (err) {
            if (err) {
                console.log('Error writing file', err);
            }
            else {
                console.log('Successfully wrote file');
            }
        });
    };
    return ReverseWords;
}());
exports.ReverseWords = ReverseWords;
;
