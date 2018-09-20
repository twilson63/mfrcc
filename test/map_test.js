const test = require('tape')
const map = require('../src/map')

test('basic map example', function(t) {
  const results = map(inc, [1, 2, 3])
  t.deepEquals(results, [2, 3, 4])
  t.end()

  function inc(v) {
    return v + 1
  }
})

test('map strings using uppercase callback', function(t) {
  const results = map(toUpper, ['hello', 'world', '!'])
  t.deepEquals(results, ['HELLO', 'WORLD', '!'])
  t.end()

  function toUpper(v) {
    return v.toUpperCase()
  }
})

test('throw error if no mapper function', function(t) {
  try {
    const results = map('Beep', [1, 2, 3])
  } catch (err) {
    t.equals(err.message, 'MAP ERROR: 1st argument should be function')
  }
  t.end()
})
