import { performance } from "perf_hooks";

const readlineSync = require('readline-sync');
const fs = require('fs');
import { ReverseWords } from "./reverseWords";


let t0 = performance.now();
let greeter = new ReverseWords();
let avs = greeter.reverseString();
let ab = greeter.changeUpperToLowerAndViceVersa(avs)
let t1 = performance.now();
const dict = {  "input" : greeter.word,
                "output" : ab,
                "performance" : (t1 - t0)};
ReverseWords.createJsonFile('output/processed.json', dict)
