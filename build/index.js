"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perf_hooks_1 = require("perf_hooks");
var prompt = require('prompt');
var readlineSync = require('readline-sync');
var fs = require('fs');
// prompt.start();
// prompt.get(['username', 'email'], function (err: string, result: { username: string; email: string; }) {
//     if (err) { return onErr(err); }
//     console.log('Command-line input received:');
//     console.log('  Username: ' + result.username);
//     console.log('  Email: ' + result.email);
// });
function onErr(err) {
    console.log(err);
    return 1;
}
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
        fs.writeFileSync(pathToJson, dict);
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
    "performance": (t1 - t0), };
var data = JSON.stringify(dict, null, 2);
ReverseWords.createJsonFile('processed.json', data);
