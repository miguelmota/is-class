(function(root) {

  function isClass(fn) {
    return typeof fn === 'function' && /^class\s/.test(Function.prototype.toString.call(fn));
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isClass;
    }
    exports.isClass = isClass;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isClass;
    });
  } else {
    root.isClass = isClass;
  }

})(this);

