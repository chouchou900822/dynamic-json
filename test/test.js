'use strict';
require('should');
var serialize = require('../index');
var data = {
  person: {
    '1': 'Edison',
    '2': 'Jason'
  },
  date: {
    '1': 'today',
    '2': 'tomorrow'
  },
  action: {
    '1': 'drink',
    '2': 'join',
    '3': 'eat'
  },
  data1: {
    '1': {
      '2': {
        '3': 'apple'
      }
    }
  },
  data2: {
    '2': {
      '1': {
        '2': {
          '1': 'party'
        }
      }
    }
  }
};
describe("four arguments test", function () {
  it("The result should eql { data1: 'Edison', data2: 'tomorrow', data3: 'eat',data4: 'apple'}", function () {
    serialize(data.data1, data.person, data.date, data.action).should.eql({
      data1: 'Edison',
      data2: 'tomorrow',
      data3: 'eat',
      data4: 'apple'
    });
  });
});
describe("five arguments test", function () {
  it("The result should eql { data1: 'Jason', data2: 'today', data3: 'join',data4: 'Edison',data5: 'party'}", function () {
    serialize(data.data2, data.person, data.date, data.action, data.person).should.eql({
      data1: 'Jason',
      data2: 'today',
      data3: 'join',
      data4: 'Edison',
      data5: 'party'
    });
  });
});