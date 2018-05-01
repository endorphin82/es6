function getSum (a = 0, b = 0) {
  // a = a || 0
  // b = b || 0
  return a + b
}

console.log(getSum(3, 4))
const name = `Sergey`
const age = 25

const str = `
<div>${name}</div>
<div>${age}</div>
<div>${getSum(5, 3)}</div>
`
document.body.innerHTML = str