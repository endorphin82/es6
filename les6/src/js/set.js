//set тот же массив только без повторов
const food = new Set(['Пряники', 'Вода'])

food.add('Хлеб')
food.add('Чай')
food.add('Фрукты')
food.add('Фрукты')
food.add('Фрукты')
food.add('Фрукты')

food.delete('Фрукты')
console.log(food.has('Чай'))
// food.clear()
console.log(food)

food.forEach(value => {
  // console.log(value)
})

for (let item of food) {
  console.log(item)
}
//clear doublecate
const data = [1, 1, 1, 2, 3, 'milk', 5, 1, 1]
const d = new Set(data)
console.log(d)
console.log(d.size)
//WeakSet - keys only OBJ