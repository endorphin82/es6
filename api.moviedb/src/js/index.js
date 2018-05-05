import MovieList from './components/movie-list'

import movieCard from './components/movie-card'

import moviesService from './movies-service'

// import movie from './components/movie'

// const link = document.querySelector('.movie-link')
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
  const target = e.target
  const dataAttr = target.getAttribute('data-filter')
  if (!dataAttr) {
    return
  }
  list.sort(dataAttr)
})


movieList.addEventListener('click', e => {
  const target = e.target
  const link = target.closest('.movie-link')
  let id

  e.preventDefault()

  if (!link) {
    return
  }
  id = link.getAttribute('href')
  moviesService.getVideoById(id)
    .then(data => {
      movieCard.renderMovie(data)
    })
})