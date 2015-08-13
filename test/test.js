'use strict';
require('should');
var dynamic = require('../index');
var serialize = dynamic.serialize;
var deserialize = dynamic.deserialize;
var dynamicJson = {
  '1': {
    '2': {
      '3': 'hello world'
    }
  }
};
var standard ={
  'person': {
    '1': 'node',
    '2': 'you',
    '3': 'I'
  },
  'date': {
    '1': 'yesterday',
    '2': 'today'
  },
  'action': {
    '1': 'write',
    '2': 'think',
    '3': 'say'
  }
};
describe("serialize test", function () {
  it("The result should eql {person: 'node', date: 'today', action: 'say', value: 'hello world'}", function () {
    serialize(dynamicJson, standard).should.eql({person: 'node', date: 'today', action: 'say', value: 'hello world'});
  });
});

describe("deserialize test", function () {
  it("The result should eql  {'1': {'2': {'3': 'hello world'}}}", function () {
    deserialize({person: 'node', date: 'today', action: 'say', value: 'hello world'}, standard).should.eql(
      {
        '1': {
          '2': {
            '3': 'hello world'
          }
        }
      });
  });
});
