import test from 'tape'
import reduce from '../src/reduce'

test('sum basic reduce test', function(t) {
  function add(a, b) {
    return a + b
  }
  const sum = reduce(add, 0)
  t.equals(sum([1, 2, 3, 4]), 10)
  t.end()
})
