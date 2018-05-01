const opt = {
  name: 'Sergey',
  age: 28,
  width: 200,
}
//
// function render (options) {
//   var {name} = options
//   var {age} = options
//   var {width} = options
//   console.log(name, age, width)
// }

function render ({name, age, width}) {
  console.log(name, age, width)
}

render(opt)

const data = [23, 54, 38]
// const price = data[0]
// const count = data[1]
// const weight = data[2]
const [price, count, weight] = data

// undefined
// console.log(data[price], data[count], data[weight])

// ok
// console.log(data[0], data[1], data[2]);
console.log(price, count, weight)

// const opt = {
//   name: 'Sergey',
//   age: 28,
//   width: 200,
// };
const {name: anotherName, age, width} = opt
console.log(anotherName, age, width)