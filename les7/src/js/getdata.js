// //async, promise
// const a = 5
// const b = 6
// const result = a + b
// console.log(result)
// setTimeout(()=>{
//   console.log('hi')
// }, 4000)
// console.log('hello')
//
// const body = document.querySelector('body')
// body.addEventListener('click', () => {
//   console.log('click')
// })

/**
 *
 * @type {XMLHttpRequest}
 */
/*
 const xhr = new XMLHttpRequest()
 xhr.open('GET', 'src/js/data.json')

 xhr.send()
 xhr.addEventListener('readystatechange', () => {
 if (xhr.readyState !== 4) {//no DONE
 return console.log('xhr.readyState no Done')
 }
 if (xhr.status !== 200) {
 // return console.log('no 200 ')
 throw new Error('Response error no 200')
 }

 console.log(xhr.responseText)
 })
 */
//Callback hell

// Promise:
//1. Ожидание обещания (pending)
//2. Готово, выполненно, успех (fulfilled)
//3. Не готово, ошибка, не успех (reject)

//принимает 2 аргумента resolve(успех), reject(не успех)
/*
 const promise = new Promise((resolve, reject) => {
 const a = 5
 //resolve() // if OK
 reject()    // if BAD
 })
 //then is OK
 promise.then(
 () => {console.log('everything OK')},
 )

 promise.catch(()=>{
 console.log('BAD')
 })*/

/*
 const promise = new Promise((resolve, reject) => {
 const a = 5
 const b = 10
 if (a < b) {
 resolve()//ok
 }else{
 reject() //bad
 }
 })

 //then is OK
 promise.then(() => {
 console.log('everything OK')
 })

 //catch is BAD
 promise.catch(()=>{
 console.log('BAD')
 })
 */

function httpGet (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)

    xhr.send()
    xhr.addEventListener('readystatechange', () => {

      //состояния
      console.log(xhr.readyState)

      if (xhr.readyState !== 4) {//no DONE
        return
      }
      if (xhr.status !== 200) {
        throw new Error('Response error no 200')
      }
      resolve(xhr.responseText)
    })
  })
}

export default httpGet