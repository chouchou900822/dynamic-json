'use strict';
require('should');
var dynamic = require('../index');
var serialize = dynamic.serialize;
var deserialize = dynamic.deserialize;
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
  data0: {
    '1': {
      '1': 'water'
    }
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
describe("serialize three arguments test", function () {
  it("The result should eql { data1: 'Edison', data2: 'drink', data3: 'water'}", function () {
    serialize(data.data0, data.person, data.action).should.eql({data1: 'Edison', data2: 'drink', data3: 'water'});
  });
});
describe("serialize four arguments test", function () {
  it("The result should eql { data1: 'Edison', data2: 'tomorrow', data3: 'eat',data4: 'apple'}", function () {
    serialize(data.data1, data.person, data.date, data.action).should.eql({
      data1: 'Edison',
      data2: 'tomorrow',
      data3: 'eat',
      data4: 'apple'
    });
  });
});
describe("serialize five arguments test", function () {
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

describe("deserialize three arguments test", function () {
  it("The result should eql {'1': {'1': 'water'}}", function () {
    deserialize({data1: 'Edison', data2: 'drink', data3: 'water'}, data.person, data.action).should.eql(
      {
        '1': {
          '1': 'water'
        }
      });
  });
});

describe("deserialize four arguments test", function () {
  it("The result should eql  {'1': {'2': {'3': 'apple'}}}", function () {
    deserialize({
      data1: 'Edison',
      data2: 'tomorrow',
      data3: 'eat',
      data4: 'apple'
    }, data.person, data.date, data.action).should.eql({
        '1': {
          '2': {
            '3': 'apple'
          }
        }
      });
  });
});

describe("deserialize five arguments test", function () {
  it("The result should eql  {'2': {'1': {'2': {'1': 'party'}}}}", function () {
    deserialize({
      data1: 'Jason',
      data2: 'today',
      data3: 'join',
      data4: 'Edison',
      data5: 'party'
    }, data.person, data.date, data.action, data.person).should.eql({
        '2': {
          '1': {
            '2': {
              '1': 'party'
            }
          }
        }
      });
  });
});