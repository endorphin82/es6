const numbers = [1, 2, 3, 5, 545]
//Sum item Arr
// const result = numbers.reduce((result, item) => {
//   return result + item
// })
const result = numbers.reduce((result, item) => result + item)

const func = (item, another) => {
  //arrow function not arguments
  //console.log(arguments)
}
func(434, 545)

function getName (a, b, c) {
  const func = (item, another) => {
    //arrow function not arguments
    //get arguments getName()
    //console.log(arguments)
  }
  func(434, 545)
}

getName(`first`, `srcond`, `third`)
// setTimeout(() => console.log('Hi'), 500)
// console.log(result)

//OLD
/*
const obj = {
  name: 'Dima',
  getName: function () {
    // that cash
    var that = this;
    function getFullName () {
      //this err
      //return this.name + 'Vladimirovich'
      return that.name + ' Vladimirovich'
    }

    return getFullName();
  },
}
*/
//NEW arrow func
/*
const obj = {
  name: 'Dima',
  getName: function () {
    const getFullName = () => {
      console.log(this)
      return this.name + ' Vladimirovich'
    }

    return getFullName()
  },
}
console.log(obj.getName())
*/
const Animal = function () {
  this.name = 'Sergey'
}

Animal.prototype.attachEvent = function () {
  const body = document.querySelector('body')

  // OLD
  /*
    const that = this
    body.addEventListener('click', function () {
      alert(that.name)
    })
  */
  //  NEW
  body.addEventListener('click', () => {
    alert(this.name)
  })
}
const a = new Animal()
a.attachEvent()

//reapeat
//const sum = (a, b) => a + b
const sum = (a, b) => {
  return a + b
}
console.log(sum(4, 5))

const sqrArrNew = [34, 54, 23].map(item => item * 2)
console.log(sqrArrNew)

const sqrArrOld = [34, 54, 23].map(function (item) {
  return item * 2
})
console.log(sqrArrOld)
//Стрелочные функции не имеют своих аргументов и зыс