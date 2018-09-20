import curryN from './_curry'
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
  return list.map(fn)
}

export default curryN(2, map)
