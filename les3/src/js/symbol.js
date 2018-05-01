let id = Symbol()

const user = {
  name: 'Dima',
  age: 19,
  color: 'yellow',
  [id]: 'sa dasd',
}

console.log(user)
//no Symbol
for (let key in user) {
  console.log(user[key])
}
