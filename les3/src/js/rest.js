// Rest operator
/*
function getSum () {
  let sum = 0
  //arguments pseudoArr (collection)
  console.log(arguments)

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
*/

//create array from pseudoArray/collection/object (arguments)
/*
function getSum () {
  let newArray = Array.prototype.slice.call(arguments, 0)
  // newArray.forEach(function (item) {
  //   console.log(item)
  // })
  newArray.push(2)
  // console.log(newArray)
  return newArray.reduce(function (res, item) {
    return res + item
  })
}
console.log(getSum(1, 2))
console.log(getSum(1, 2, 5))
*/

//New code with rest
// (a, b, ... arg)
function getSum (...args) {
  return args.reduce(function (res, item) {
    return res + item
  })
}

console.log(getSum(2, 1, 3))
