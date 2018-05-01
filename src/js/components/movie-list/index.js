import movie from '../movie'

export default class MovieList {
  init (data) {
    this.data = data
  }

  drawToDom (selector) {
    // this.selector = selector;
    this.clearList(selector)
    selector.appendChild(this.fragmrnt)
  }

  renderMovies (data) {
    this.fragmrnt = document.createDocumentFragment()

    data.forEach(data => {
      const article = document.createElement('article')

      article.classList.add('movie')
      article.classList.add('col-md-4')
      article.innerHTML = movie(data)
      this.fragmrnt.appendChild(article)
    })
    // debugger
  }

  clearList (selector) {
    selector.innerHTML = ''
  }

  sort (filter) {
    const data = [...this.data.result]

    if (filter === 'raiting-max') {
      console.log(data)
      this.sortByMaxRaiting(data)
    }
    if (filter === 'raiting-min') {
      this.sortByMinRaiting(data)
    }
    if (filter === 'date-new') {

    }
    if (filter === 'date-old') {

    }
  }

  sortByMaxRaiting (data) {
    data.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      }
      if (a.popularity > b.popularity) {
        return -1
      }
    })
    this.renderMovies(data)
    this.drawToDom(document.querySelector('.movies'))
  }

  sortByMinRaiting (data) {
    data.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1
      }
      if (a.popularity < b.popularity) {
        return -1
      }
    })
    this.renderMovies(data)
    this.drawToDom(document.querySelector('.movies'))
  }
}
