function sum(a, b) {
  DEBUG("sum", typeof a === 'number', a > 0)
  DEBUG("sum", typeof b === 'number', b > 0)
  return a + b
}
