# is-class

> Check if function is an ES6 [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/miguelmota/is-class/master/LICENSE)
[![NPM version](https://badge.fury.io/js/is-class.svg)](http://badge.fury.io/js/is-class)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

# Install

```bash
npm install is-class
```

# Usage

```javascript
const isClass = require('is-class')

class F {}
function G() {}

console.log(isClass(F)) // true
console.log(isClass(G)) // false
```

# Test

```bash
npm test
```

# License

[MIT](LICENSE)
