import not from './_not'
import equals from './_equals'
import curryN from './_curry'
/**
 * filter
 *
 * @param {function} fn
 * @param {array} list
 * @returns array
 *
 */
function filter(fn, list) {
  if (not(equals(typeof fn, 'function'))) {
    throw new Error('FILTER ERROR: 1st argument should be function')
  }
  return list.filter(fn)
}

export default curryN(2, filter)
