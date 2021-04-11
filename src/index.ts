import { performance } from "perf_hooks";
import { ReverseWords } from "./reverseWords";


//  first start counting time, then we start app - create object from RevereWords class
let t0 = performance.now();
let greeter = new ReverseWords();
greeter.checkIfWordIsCorrect()
let avs = greeter.reverseString();
let ab = greeter.changeUpperToLowerAndViceVersa(avs)
let t1 = performance.now();
const dict = {  "input" : greeter.word,
                "output" : ab,
                "performance" : (t1 - t0)};
ReverseWords.createJsonFile('output/processed.json', dict)
