const name = 'Dima'
const age = 25

function getName () {
  return this.name
}

function getPropName () {
  return 'someDynamicValue'
}

//OLD
/*
const user = {
  name: name,
  age: age,
  getName: getName,
}
*/

//NEW
const user = {
  name,
  age,
  getName,
  getAge () {
    return this.age
  },
  [1 + 1]: 2,
  [getPropName()]: 'some dynamic value',
}
// console.log(user.getName())
// console.log(user.getAge())
console.log(user)

