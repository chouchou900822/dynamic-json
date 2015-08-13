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
var result = serialize(dynamicJson, standard);
```

deserialize

```js
var deserialize = dynamic.deserialize;
var dynamicJson = serialize(result, standard);
```

## params

`dynamicJson`:
the dynamic json data you want to serialize.

`standard`:
every json response to every key in `dynamicJson`.

`result`:
the serialize result.

## Example

```js
var dynamic = require('dynamic-json');
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
serialize(dynamicJson, standard);
//{person: 'node', date: 'today', action: 'say', value: 'hello world'}
deserialize({person: 'node', date: 'today', action: 'say', value: 'hello world'}, standard)
//{'1': {'2': {'3': 'hello world'}}}
```

## TODO

...

### [MIT Licensed](LICENSE)