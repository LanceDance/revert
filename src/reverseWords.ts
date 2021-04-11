import { performance } from "perf_hooks";
const readlineSync = require('readline-sync');
const fs = require('fs');

class ReverseWords {

    word: string;
    // if we want to change the rule for checking user's input
    private lim = {limit: /^[a-zA-Z0-9]*$/};

// create constructor with two options: check value from cli or add value in constructor - good if we want to connect to
// other apps and use it without command line
    constructor(word?: string) {
        word ? this.word = word : this.word = readlineSync.question('Write a word and I do magic with that? ', this.lim)
    }

    // reverse word nothing special
    reverseString() {
        let newString = "";
    for (let i = this.word.length - 1; i >= 0; i--) {
        newString += this.word[i];
    }

    return newString;
    }
// swap letters 
    changeUpperToLowerAndViceVersa(str: string) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
// create json with main data
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
    // rather check if word is correct one more time
    checkIfWordIsCorrect() {
        const isCorrect = this.lim.limit.test(this.word) ? true : false;
        if (isCorrect == false) {
            console.log('Your word is in wrong format')
            process.exit()
        }

    }
};

export { ReverseWords}