const firstUser = {
  name: 'Dima',
  age: 25,
  width: 23,
}

const data = {
  color: 'yelow',
  goal: [],
  width: 49,
}
const result = {
  name: 'Dima',
  age: 25,
  color: 'green',
  goal: [],
  width: 40,
}
//Mutation BAD
// const resultObject = Object.assign(data, result)
//No Mutation OK
// const resultObject = Object.assign({},data, result)

const resultObject = {
  ...firstUser,
  ...data,
}
// console.log(resultObject)
// console.log(data)

//Adding Arrays
/*
const firstArray = [1, 34, 545, 324]
const secondArray = [45, 23, 564, 23]
//const resultArray = firstArray.concat(secondArray)

//NEW (spread)
const resultArray = [
  ...firstArray,
  34,
  25,
  ...secondArray.slice(1, 2),
];

console.log(resultArray)
*/
console.log(firstUser, data, result)
