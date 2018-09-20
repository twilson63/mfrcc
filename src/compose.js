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
  return function(value) {
    return fns.reverse().reduce(function(acc, fn) {
      return fn(acc)
    }, value)
  }
}

export default compose
