import movie from '../movie';

export default class MovieList {
    constructor(data){
        this.data = data;
        this.renderMovies();
    }

    drawToDom(selector){
        selector.innerHTML = this.movieList;
    }

    renderMovies(){
        this.fragmrnt = document.createDocumentFragment();

        this.data.forEach(data =>{
            const article = document.createElement('article');
            article.classList.add('movie');
            article.innerHTML = movie(data);
            this.fragmrnt.appendChild(article);
        });
        // debugger
    }
}
