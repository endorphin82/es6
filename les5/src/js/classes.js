// OLD
/*
function Animal (name) {
  this.name = name
}

Animal.prototype.getName = function () {
  return this.name
}
const bird = new Animal('bird')
const dog = new Animal('dog')
const cat = new Animal('cat')

console.log(bird.getName())
console.log(dog.getName())
console.log(cat.getName())
*/

//NEW
class Animal {
  //static version = '0.01'
  constructor (name) {
    this.name = name
  }

  getName () {
    return this.name
  }

  setName (name) {
    this.name = name
  }
}

/*
const bird = new Animal('bird')
const dog = new Animal('dog')
const cat = new Animal('cat')
const snake = new Animal('snake')
console.log(bird.getName())
console.log(dog.getName())
console.log(cat.getName())
console.log(snake.getName())

snake.setName('tiger')
console.log(snake.getName())
*/
// console.log(cat.version)//undefined
// console.log(Animal.version)

//Nasledovanie
//OLD
/*
function Bird () {
  Animal.apply(this, arguments)//super()
}

Bird.prototype = Object.create(Animal.prototype)
Bird.prototype.constructor = Bird
*/

// NEW
class Bird extends Animal {
  //static version = '0.001'
  constructor (name) {
    super(name)
    console.log(Bird.version)
  }


  getName () {
    console.log('LOG from Bird')
    console.log(super.getName())
  }
}

const bird = new Bird('kar')
bird.getName()