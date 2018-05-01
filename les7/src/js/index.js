import httpGet from './getdata'
import './fetch'
import 'whatwg-fetch'

/*
 httpGet('src/js/data.json')
 .then((text) => console.log(text))
 .catch(() => console.log('BAD'))
 */

/*
Promise.all([
  fetch('url'),
  fetch('url'),
])  //выполнится, только если выполнятся все fetch
// data - масив, результат fetch
  .then((data) => console.log('ok'))
  .catch(() => console.log('bad'))
 */