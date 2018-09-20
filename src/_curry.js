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
    throw new Error('number of arguments is required for first parameter')
  }

  let previousArgs = []
  function callback(...args) {
    if (equals(add(previousArgs.length, args.length), n)) {
      return fn.apply(null, previousArgs.concat(args))
    } else {
      previousArgs = previousArgs.concat(args)
      return callback
    }
  }
  return callback
}

export default curryN

// helper functions
function equals(a, b) {
  return a === b
}

function add(a, b) {
  return a + b
}
