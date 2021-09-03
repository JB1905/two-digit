# [two-digit](https://github.com/JB1905/two-digit)

[![NPM version](https://img.shields.io/npm/v/two-digit?style=flat-square)](https://www.npmjs.com/package/two-digit)
[![NPM downloads](https://img.shields.io/npm/dm/two-digit?style=flat-square)](https://www.npmjs.com/package/two-digit)
[![NPM license](https://img.shields.io/npm/l/two-digit?style=flat-square)](https://www.npmjs.com/package/two-digit)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/two-digit?style=flat-square)](https://codecov.io/gh/JB1905/two-digit)
[![Travis](https://img.shields.io/travis/com/JB1905/two-digit/main?style=flat-square)](https://app.travis-ci.com/github/JB1905/two-digit)
[![Bundle size](https://img.shields.io/bundlephobia/min/two-digit?style=flat-square)](https://bundlephobia.com/result?p=two-digit)

## About

Format the number to two digits

### Alternatives

- [double-digit](https://github.com/omrilotan/mono/tree/master/packages/double-digit/) by [omrilotan](https://github.com/omrilotan/)
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

**Connect the library to the project with ES6 import:**

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

## Params

| Type                                                                                               | Description           |
| -------------------------------------------------------------------------------------------------- | --------------------- |
| string or number (if a value of a different type is passed, the function returns the value passed) | value to be formatted |

## Example

Example results for different data:

```js
twoDigit(5); // '05'
twoDigit(15); // 15
twoDigit(120); // 120
twoDigit(2.51); // '02.51'
twoDigit(Math.PI); // '03.141592653589793'
twoDigit(-1); // -1
twoDigit('2'); // '02'
twoDigit('04'); // '04'
twoDigit('10'); // '10'
twoDigit('204'); // '204'
twoDigit('2.1.3'); // '2.1.3'
twoDigit(0b111); // '07'
twoDigit(0b1100); // 0b1100 (12 decimal)
twoDigit(0o5); // '05'
twoDigit(0o12); // 0o12 (10 decimal)
twoDigit(0x8); // '08'
twoDigit(0xf2); // 0xf2 (242 decimal)
twoDigit('J'); // 'J'
twoDigit('Hello World!'); // 'Hello World!'
twoDigit({ name: 'John' }); // { name: 'John' }
twoDigit(Infinity); // Infinity
twoDigit(null); // null
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
