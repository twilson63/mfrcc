(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.funfp = {})));
}(this, (function (exports) { 'use strict';

  /**
   * curryN
   *
   * convert functions to support currying
   *
   * @param {Number} n
   * @param {Function} fn
   * @returns function
   */
  function curryN(n, fn) {
    if (typeof n !== 'number') {
      throw new Error('number of arguments is required for first parameter');
    }

    var previousArgs = [];

    function callback() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (equals(add(previousArgs.length, args.length), n)) {
        return fn.apply(null, previousArgs.concat(args));
      } else {
        previousArgs = previousArgs.concat(args);
        return callback;
      }
    }

    return callback;
  }

  function equals(a, b) {
    return a === b;
  }

  function add(a, b) {
    return a + b;
  }

  /**
   * map
   *
   * iterate over a collection of items and apply a map function
   * to each item in the collection and return a new collection
   * with the transformed result of each item.
   *
   * @param {function} fn
   * @param {array} list
   * @returns array
   *
   */

  function map(fn, list) {
    return list.map(fn);
  }

  var map$1 = curryN(2, map);

  /**
   * filter
   *
   * @param {function} fn
   * @param {array} list
   * @returns array
   *
   */

  function filter(fn, list) {
    return list.filter(fn);
  }

  var filter$1 = curryN(2, filter);

  /**
   * reduce
   *
   * @param {function} fn
   * @param {array} list
   * @returns array
   *
   */

  function reduce(fn, value, list) {
    return list.reduce(fn, value);
  }

  var reduce$1 = curryN(3, reduce);

  /**
   *
   * compose
   *
   * combine functions from right to left
   * and return a function that takes a value
   * and passed the value to the right most function
   * which then passes its result down the line.
   *
   */
  function compose() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (value) {
      return fns.reverse().reduce(function (acc, fn) {
        return fn(acc);
      }, value);
    };
  }

  exports.map = map$1;
  exports.filter = filter$1;
  exports.reduce = reduce$1;
  exports.compose = compose;
  exports.curryN = curryN;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
