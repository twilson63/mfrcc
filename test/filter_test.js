const test = require('tape')
const filter = require('../src/filter')

test('only even numbers', function(t) {
  function even(v) {
    return v % 2 === 0
  }
  t.deepEquals(filter(even, [1, 2, 3, 4]), [2, 4])
  t.end()
})

test('only odd numbers', function(t) {
  function odd(v) {
    return v % 2 !== 0
  }
  const onlyOdd = filter(odd)
  t.deepEquals(onlyOdd([1, 2, 3, 4]), [1, 3])
  t.end()
})
