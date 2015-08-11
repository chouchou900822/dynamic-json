# dynamic-json

[![Build Status](https://travis-ci.org/chouchou900822/dynamic-json.svg)](https://travis-ci.org/chouchou900822/dynamic-json)

[![NPM](https://nodei.co/npm/dynamic-json.png?mini=true)](https://nodei.co/npm/dynamic-json/)

序列化动态json.

## 安装

```sh
$ npm install dynamic-json
```

## 测试

```sh
$ sudo npm install -g mocha
  && npm test
```


## 如何使用

```js
var serialize = require('dynamic-json');
var result = serialize(dynamicJson, json1, json2, ...);
```

## 参数

`dynamicJson`:
希望序列化的目标json

`json1, json2, ...`:
每个json都对应动态json`dynamicJson`的键

## 例子

```js
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
serialize(data.data0, data.person, data.action);
//{ data1: 'Edison', data2: 'drink', data3: 'water'}
serialize(data.data1, data.person, data.date, data.action);
//{data1: 'Edison',data2: 'tomorrow',data3: 'eat',data4: 'apple'}
serialize(data.data2, data.person, data.date, data.action, data.person);
//{data1: 'Jason',data2: 'today',data3: 'join',data4: 'Edison',data5: 'party'}
```

## TODO

反序列化

### [MIT Licensed](LICENSE)