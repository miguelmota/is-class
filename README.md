# is-class

> Check if function is an ES6 [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

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
