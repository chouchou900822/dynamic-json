# dynamic-json

[![Build Status](https://travis-ci.org/chouchou900822/dynamic-json.svg)](https://travis-ci.org/chouchou900822/dynamic-json)

[![NPM](https://nodei.co/npm/dynamic-json.png?mini=true)](https://nodei.co/npm/dynamic-json/)

Serialize dynamic json data.[中文说明](cn.md)

## Installation

```sh
$ npm install dynamic-json
```

## test

```sh
$ sudo npm install -g mocha
  && npm test
```


## API

```js
var serialize = require('dynamic-json');
var result = serialize(dynamicJson, json1, json2, ...);
```

## params

`dynamicJson`:
the dynamic json data you want to serialize.

`json1, json2, ...`:
every json response to every key in `dynamicJson`.

## Example

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
serialize(data.data1, data.person, data.date, data.action);
//{data1: 'Edison',data2: 'tomorrow',data3: 'eat',data4: 'apple'}
serialize(data.data2, data.person, data.date, data.action, data.person);
//{data1: 'Jason',data2: 'today',data3: 'join',data4: 'Edison',data5: 'party'}
```

## TODO

...

### [MIT Licensed](LICENSE)