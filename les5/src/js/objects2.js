const name = 'Dima'
const age = 25

function getName () {
  return this.name
}

function returnDynamicValue () {
  return 'dynamicValue'
}

const user = {
  name,
  age,
  //getter
  get info () {
    return `Hello, my name is ${name}. I am ${age} years`
  },
  //setter
  set info (str) {
    return str
  },
  getName,
  [returnDynamicValue()]: 'dyn val',
}
console.log(user)
//getter
console.log(user.info)
//setter
console.log(user.info = 'some text')

const props = {
  county: 'Ukraine',
  city: 'Kiev',
  address: 'Some address',
  name: 'Masha',
}

const newObj = Object.assign({}, user, props)
console.log(newObj)
//Destructurisation
//preset 0

// const newDestrObj = {
//   ...user,
//   ...props,
// }
console.log(newDestrObj)