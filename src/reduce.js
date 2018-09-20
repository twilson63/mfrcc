import not from './_not'
import equals from './_equals'
import curryN from './_curry'
/**
 * reduce
 *
 * @param {function} fn
 * @param {array} list
 * @returns array
 *
 */
function reduce(fn, value, list) {
  if (not(equals(typeof fn, 'function'))) {
    throw new Error('REDUCE ERROR: 1st argument should be function')
  }

  return list.reduce(fn, value)
}

export default curryN(3, reduce)
