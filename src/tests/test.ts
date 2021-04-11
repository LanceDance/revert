import { ReverseWords } from "../reverseWords";
import { expect } from "chai";
const Mocha = require('mocha');
const fs = require('fs');


const testValue = 'test123ACSdc';
const mock_dict = {  "input" : testValue,
                "output" : 'test value',
                "performance" : 0.37362194061279297};
describe('Check reverse class', () => {
  const result = new ReverseWords(testValue);
  it('Reverse the input string', () => {
    const a = result.reverseString();
    expect(a).to.equal('cdSCA321tset');
  });

  it('Swap letters', () => {
    const b = result.changeUpperToLowerAndViceVersa(testValue)
    expect(b).to.equal('TEST123acsDC')
  })

  it('Check regex', () => {
    // @ts-ignore
    expect(result.lim.limit.test(testValue))
  })

  it('create new json file', () => {
    const pathToJson = 'output/test/processed.json'
    ReverseWords.createJsonFile(pathToJson,mock_dict );
    const dummyJson = fs.readFileSync(pathToJson)
    expect(JSON.parse(dummyJson))
  })
  }); 