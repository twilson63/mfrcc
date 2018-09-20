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
  return list.reduce(fn, value)
}

export default curryN(3, reduce)
