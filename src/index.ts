import { performance } from "perf_hooks";

const prompt = require('prompt');
const readlineSync = require('readline-sync');
const fs = require('fs');


class ReverseWords {
    word: string;
    constructor() {
        this.word = readlineSync.question('Write a word and I do magic with that? ', {limit: /^[a-zA-Z0-9_.-]*$/})
    }

    reverseString() {
        var newString = "";
    for (var i = this.word.length - 1; i >= 0; i--) {
        newString += this.word[i];
    }
    return newString;
    }

    changeUpperToLowerAndViceVersa(str: string) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }

    static createJsonFile(pathToJson: string, dict: object) {
        let data = JSON.stringify(dict, null, 2);
        fs.writeFileSync(pathToJson, data, (err: any) => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        }
        )}

};
let t0 = performance.now();
let greeter = new ReverseWords();
let avs = greeter.reverseString();
let ab = greeter.changeUpperToLowerAndViceVersa(avs)
let t1 = performance.now();
const dict = {  "input" : greeter.word,
                "output" : ab,
                "performance" : (t1 - t0)};
ReverseWords.createJsonFile('processed.json', dict)
