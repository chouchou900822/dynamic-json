"use strict";

var _ = require('lodash');

var resolve = function (dynamicJson) {
  var result = [];
  (function again(dynamicJson) {
    if (typeof dynamicJson == 'object') {
      for (var key in dynamicJson) {
        result.push(key);
        again(dynamicJson[key]);
      }
    } else {
      result.push(dynamicJson);
    }
  })(dynamicJson);
  return result;
};
exports.serialize = function (dynamicJson, standard) {
  var result = {};
  var array = resolve(dynamicJson);
  for (var key in standard) {
    var value = array.shift();
    result[key] = standard[key][value];
  }
  result['value'] = array.shift();
  return result;
};
var standard = {
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
var solve = function (array) {
  var value = array.pop();

  function again(value, array) {
    if (array[0]) {
      var result = {};
      var key = array.pop();
      result[key] = value;
      return again(result, array);
    } else {
      return value;
    }
  }
  return again(value, array);
};

exports.deserialize = function (result, standard) {
  var array = [];
  for (var key in standard) {
    for (var item in result) {
      if (key == item) {
        for (var num in standard[key]) {
          if (standard[key][num] == result[item]) {
            array.push(num);
          }
        }
      }
    }
  }
  array.push(result.value);
  return solve(array);
};