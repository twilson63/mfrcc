(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.funfp = {})));
}(this, (function (exports) { 'use strict';

  function _not(v) {
    return !v;
  }

  function _equals(a, b) {
    return a === b;
  }

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

    let previousArgs = [];

    function callback(...args) {
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
    if (_not(_equals(typeof fn, 'function'))) {
      throw new Error('MAP ERROR: 1st argument should be function');
    }

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
    if (_not(_equals(typeof fn, 'function'))) {
      throw new Error('FILTER ERROR: 1st argument should be function');
    }

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
    if (_not(_equals(typeof fn, 'function'))) {
      throw new Error('REDUCE ERROR: 1st argument should be function');
    }

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
  function compose(...fns) {
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
