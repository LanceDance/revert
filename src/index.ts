import { performance } from "perf_hooks";
import { ReverseWords } from "./reverseWords";


//  first start counting time, then we start app - create object from RevereWords class
let t0 = performance.now();
let newWord = new ReverseWords();
newWord.checkIfWordIsCorrect()
let reversed = newWord.reverseString();
let swaped = newWord.changeUpperToLowerAndViceVersa(reversed)
let t1 = performance.now();
const dict = {  "input" : newWord.word,
                "output" : swaped,
                "performance" : (t1 - t0)};
console.log("Swapped word " + swaped)
ReverseWords.createJsonFile('output/processed.json', dict)
