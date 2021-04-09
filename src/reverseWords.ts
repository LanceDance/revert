import { performance } from "perf_hooks";
const readlineSync = require('readline-sync');
const fs = require('fs');

class ReverseWords {
    word: string;
    constructor() {
        this.word = readlineSync.question('Write a word and I do magic with that? ', {limit: /^[a-zA-Z0-9_.-]*$/})
    }

    reverseString() {
        let newString = "";
    for (let i = this.word.length - 1; i >= 0; i--) {
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

export { ReverseWords}