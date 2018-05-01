function getSum () {
  let sum = 0
  for (let value of arguments) {
    console.log(value)
    sum += value
  }
  return sum
}

console.log(getSum(4, 3, 5))