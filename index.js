"use strict";

var _ = require('lodash');
/**
 * @params arguments
 * @returns {{}}
 */
exports.serialize = function () {
  var result = {};
  var num = arguments.length;
  var data = arguments[0];
  var keys = resolve(data);
  var len = keys.length;
  for (var i = 1; i < num; i++) {
    var key = keys[i - 1];
    result['data' + i] = arguments[i][key];
  }
  result['data' + len] = keys[len - 1];
  return result;
}
var resolve = function (data) {
  var res = [];
  (function again(data) {
    if (typeof data == 'object') {
      _.map(data, function (value, key) {
        res.push(key);
        again(value);
      });
    } else {
      res.push(data);
    }
  })(data);
  return res;
};
exports.deserialize = function () {

};