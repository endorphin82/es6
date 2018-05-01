import MovieList from './components/movie-list'

import moviesService from './movies-service'

const input = document.querySelector('.search-input')
const movieList = document.querySelector('.movies')
const list = new MovieList()
const filters = document.querySelector('.filters')

input.addEventListener('input', e => {
  const searchText = e.target.value

  if (!searchText) {
    list.clearList(movieList)
    return
  }

  moviesService.getVideoByText(searchText)
    .then(data => {
      list.init(data)
      list.renderMovies(data.results)
      list.drawToDom(movieList)
    })
})

filters.addEventListener('click', (e) => {
  e.preventDefault()
  // debugger
  const target = e.target
  const dataAttr = target.getAttribute('data-filter')
  if (!dataAttr) {
    return
  }
  list.sort(dataAttr)
})