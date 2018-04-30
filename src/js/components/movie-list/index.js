import movie from '../movie'

export default class MovieList {

  drawToDom(selector) {
    this.clearList(selector)
    selector.appendChild(this.fragmrnt)
  }

  renderMovies (data) {
    this.data = data
    this.fragmrnt = document.createDocumentFragment()
    //  console.log(this.data.results)
    // if (error) return console.error('sa'+error)
    this.data.results.forEach(data => {
      const article = document.createElement('article')
      article.classList.add('movie')
      article.classList.add('col-md-4')

      article.innerHTML = movie(data)
      this.fragmrnt.appendChild(article)
    })
    // debugger
  }

  clearList(selector){
      selector.innerHTML = '';
  }
}
