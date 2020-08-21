# [two-digit](https://github.com/jb1905/two-digit)

[![NPM version](http://img.shields.io/npm/v/two-digit?style=flat-square)](https://www.npmjs.com/package/two-digit)
[![NPM downloads](http://img.shields.io/npm/dm/two-digit?style=flat-square)](https://www.npmjs.com/package/two-digit)
[![NPM license](https://img.shields.io/npm/l/two-digit?style=flat-square)](https://www.npmjs.com/package/two-digit)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/two-digit?style=flat-square)](https://codecov.io/gh/JB1905/two-digit)
[![Travis](https://img.shields.io/travis/JB1905/two-digit/master?style=flat-square)](https://travis-ci.org/JB1905/two-digit)
[![Bundle size](https://img.shields.io/bundlephobia/min/two-digit?style=flat-square)](https://bundlephobia.com/result?p=two-digit)

## About

Format the number to two digits

### Alternatives

- [double-digit](https://github.com/omrilotan/mono/tree/master/packages/double-digit#readme) by [omrilotan](https://github.com/omrilotan/)
- [ddday](https://github.com/thodorisbais/ddday/) by [Thodoris Bais](https://github.com/thodorisbais/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install two-digit
```

Or Yarn:

```sh
$ yarn add two-digit
```

## Getting Started

**Connect libary to project using ES6 import:**

```js
import twoDigit from 'two-digit';
```

**Or CommonJS:**

```js
const twoDigit = require('two-digit');
```

Next use library:

```js
const formattedValue = twoDigit(/* value */);
```

### Params

| Type                                                                                               | Description           |
| -------------------------------------------------------------------------------------------------- | --------------------- |
| string or number (if a value of a different type is passed, the function returns the value passed) | value to be formatted |

### Example

Example results for different data:

```js
twoDigit(1); // '01'
twoDigit(10); // 10
twoDigit(1000); // 1000
twoDigit('5'); // '05'
twoDigit('05'); // '05'
twoDigit('500'); // '500'
twoDigit('A'); // 'A'
twoDigit(Infinity); // Infinity
twoDigit(null); // null
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
