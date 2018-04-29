import movie from '../movie'

export default class MovieList {
  // constructor (data) {
  //   this.data = data
  //  // console.log(this.data.results)
  //   this.renderMovies()
  // }

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
      article.innerHTML = movie(data)
      this.fragmrnt.appendChild(article)
    })
    // debugger
  }
  clearList(selector){
      selector.innerHTML = '';
  }

}
