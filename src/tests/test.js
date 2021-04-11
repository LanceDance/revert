"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverseWords_1 = require("../src/reverseWords");
var chai_1 = require("chai");
describe('Hello function', function () {
    var stdin = require('mock-stdin').stdin();
    stdin.send("Some text", "ascii");
    it('should return hello world', function () {
        var result = reverseWords_1.hello();
        chai_1.expect(result).to.equal('Hello World!');
    });
});
