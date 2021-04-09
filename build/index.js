"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perf_hooks_1 = require("perf_hooks");
var prompt = require('prompt');
var readlineSync = require('readline-sync');
var fs = require('fs');
var ReverseWords = /** @class */ (function () {
    function ReverseWords() {
        this.word = readlineSync.question('Write a word and I do magic with that? ', { limit: /^[a-zA-Z0-9_.-]*$/ });
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
;
var t0 = perf_hooks_1.performance.now();
var greeter = new ReverseWords();
var avs = greeter.reverseString();
var ab = greeter.changeUpperToLowerAndViceVersa(avs);
var t1 = perf_hooks_1.performance.now();
var dict = { "input": greeter.word,
    "output": ab,
    "performance": (t1 - t0) };
ReverseWords.createJsonFile('processed.json', dict);
