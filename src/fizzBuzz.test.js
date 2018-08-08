import test from 'ava'
import fizzBuzz from './fizzBuzz'

test('simple check', t => {
  t.truthy(true)
})

test('when 3 given, should return Fizz', t => {
  const actual = fizzBuzz(3)
  const expected = 'Fizz'
  t.is(actual, expected)
})
