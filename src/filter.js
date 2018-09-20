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
  return list.filter(fn)
}

export default curryN(2, filter)
