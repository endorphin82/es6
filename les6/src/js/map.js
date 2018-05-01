//сохраняется порядок при переборе
const user = new Map()

const func = () => {alert('hi')}
const obj = {name: 'Sergey'}
const arr = [1, 2, 3]

user.set('name', 'Dima')
user.set(func, 'function')
user.set(obj, {value: 5})
user.set(arr, [3, 4, 5])
// console.log(user)
// console.log(user.get(func))
// console.log(user.get(obj))
// console.log(user.get(arr))

//keys
//values
//entries

for (let k of user.keys()) {
  // console.log(k)
}

for (let v of user.values()) {
  // console.log(v)
}

for (let e of user.entries()) {
  console.log(e)
}

const animal = new Map([
  ['country', 'Ukraine'],
  ['city', 'Kiev'],
])

// console.log(animal)

user.forEach((value, key, map) => {
  console.log(value)
})
//delete
// user.delete(func)
console.log(user)
//входит или нет
console.log(user.has(obj))
//clear map
// console.log(user.clear())

//WeakMap (keys only OBJ)
// + set, delete, get, has
// - forEach, clear(), size