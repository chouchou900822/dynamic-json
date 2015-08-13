# dynamic-json

[![Build Status](https://travis-ci.org/chouchou900822/dynamic-json.svg)](https://travis-ci.org/chouchou900822/dynamic-json)

[![NPM](https://nodei.co/npm/dynamic-json.png?mini=true)](https://nodei.co/npm/dynamic-json/)

序列化和反序列化动态json.

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

序列化

```js
var dynamic = require('dynamic-json');
var serialize = dynamic.serialize;
var result = serialize(dynamicJson, standard);
```

反序列化

```js
var deserialize = dynamic.deserialize;
var dynamicJson = serialize(result, standard);
```

## 参数

`dynamicJson`:
希望序列化的目标json

`standard`:
每个json都对应动态json`dynamicJson`的键

`result`:
序列化后的结果

## 例子

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