const test = require('tape')
const curryN = require('../src/_curry')

test('basic curry test', function(t) {
  const add = curryN(2, function(a, b) {
    return a + b
  })
  const result = add(1)(2)
  t.equals(result, 3)
  t.end()
})

test('test 9 args', function(t) {
  const superAdd = curryN(9, function(...args) {
    function add(a, b) {
      return a + b
    }
    return args.reduce(add, 0)
  })
  t.equals(superAdd(1, 1, 1, 1, 1, 1, 1, 1, 1), 9)
  t.end()
})
