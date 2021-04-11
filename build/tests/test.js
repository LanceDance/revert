"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverseWords_1 = require("../reverseWords");
var chai_1 = require("chai");
var Mocha = require('mocha');
var fs = require('fs');
var testValue = 'test123ACSdc';
var mock_dict = { "input": testValue,
    "output": 'test value',
    "performance": 0.37362194061279297 };
describe('Check reverse class', function () {
    var result = new reverseWords_1.ReverseWords(testValue);
    it('Reverse the input string', function () {
        var a = result.reverseString();
        chai_1.expect(a).to.equal('cdSCA321tset');
    });
    it('Swap letters', function () {
        var b = result.changeUpperToLowerAndViceVersa(testValue);
        chai_1.expect(b).to.equal('TEST123acsDC');
    });
    it('Check regex', function () {
        // @ts-ignore
        chai_1.expect(result.lim.limit.test(testValue));
    });
    it('create new json file', function () {
        var pathToJson = 'output/test/processed.json';
        reverseWords_1.ReverseWords.createJsonFile(pathToJson, mock_dict);
        var dummyJson = fs.readFileSync(pathToJson);
        chai_1.expect(JSON.parse(dummyJson));
    });
});
