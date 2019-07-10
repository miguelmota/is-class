;(function (root) {
  const toString = Function.prototype.toString

  function fnBody (fn) {
    return toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '')
  }

  function isClass (fn) {
    if (typeof fn !== 'function') {
      return false
    }

    if (/^class[\s{]/.test(toString.call(fn))) {
      return true
    }

    // babel.js classCallCheck() & inlined
    const body = fnBody(fn)
    return (/classCallCheck\(/.test(body) || /TypeError\("Cannot call a class as a function"\)/.test(body))
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isClass
    }
    exports.isClass = isClass
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return isClass
    })
  } else {
    root.isClass = isClass
  }
})(this);
