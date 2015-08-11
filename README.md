# dynamic-json

[![Build Status](https://travis-ci.org/chouchou900822/dynamic-json.svg)](https://travis-ci.org/chouchou900822/dynamic-json)

[![NPM](https://nodei.co/npm/dynamic-json.png?mini=true)](https://nodei.co/npm/dynamic-json/)

Serialize and deserialize dynamic json data. 

[中文说明](cn.md)

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

serialize

```js
var dynamic = require('dynamic-json');
var serialize = dynamic.serialize;
var result = serialize(dynamicJson, json1, json2, ...);
```

deserialize

```js
var deserialize = dynamic.deserialize;
var dynamicJson = serialize(result, json1, json2, ...);
```

## params

`dynamicJson`:
the dynamic json data you want to serialize.

`json1, json2, ...`:
every json response to every key in `dynamicJson`.

`result`:
the serialize result.

## Example

```js
var dynamic = require('dynamic-json');
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
serialize(data.data0, data.person, data.action);
//{ data1: 'Edison', data2: 'drink', data3: 'water'}
deserialize({ data1: 'Edison', data2: 'drink', data3: 'water'}, data.person, data.action)
//{'1': {'1': 'water'}}
serialize(data.data1, data.person, data.date, data.action);
//{data1: 'Edison',data2: 'tomorrow',data3: 'eat',data4: 'apple'}
deserialize({
      data1: 'Edison',
      data2: 'tomorrow',
      data3: 'eat',
      data4: 'apple'
    }, data.person, data.date, data.action);
//{'1': {'2': {'3': 'apple'}}}
serialize(data.data2, data.person, data.date, data.action, data.person);
//{data1: 'Jason',data2: 'today',data3: 'join',data4: 'Edison',data5: 'party'}
deserialize({
      data1: 'Jason',
      data2: 'today',
      data3: 'join',
      data4: 'Edison',
      data5: 'party'
    }, data.person, data.date, data.action, data.person)
//{'2': {'1': {'2': {'1': 'party'}}}}
```

## TODO

...

### [MIT Licensed](LICENSE)