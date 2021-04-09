"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perf_hooks_1 = require("perf_hooks");
var readlineSync = require('readline-sync');
var fs = require('fs');
var reverseWords_1 = require("./reverseWords");
var t0 = perf_hooks_1.performance.now();
var greeter = new reverseWords_1.ReverseWords();
var avs = greeter.reverseString();
var ab = greeter.changeUpperToLowerAndViceVersa(avs);
var t1 = perf_hooks_1.performance.now();
var dict = { "input": greeter.word,
    "output": ab,
    "performance": (t1 - t0) };
reverseWords_1.ReverseWords.createJsonFile('processed.json', dict);
