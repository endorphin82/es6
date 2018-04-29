import MovieList from './components/movie-list'

import moviesService from './movies-service'

const input = document.querySelector('.search-input')
const movieList = document.querySelector('.movies')
const list = new MovieList()

input.addEventListener('input', e => {
  const searchText = e.target.value

  if (!searchText) {
    list.clearList(movieList)
    return
  }

  moviesService.getVideoByText(searchText)
  //.then(result => console.log(result)) //ok
    .then(result => {
      // const list = new MovieList(result)
      list.renderMovies(result)

      list.drawToDom(movieList)
    })
})
