import movie from '../movie';

export default class MovieList {
    constructor(data){
        this.data = data;
        this.renderMovies();
    }

    drawToDom(selector){
        selector.appendChild(this.fragmrnt);
    }

    renderMovies(){
        this.fragmrnt = document.createDocumentFragment();
        this.data.result.forEach(data =>{
            const article = document.createElement('article');
            article.classList.add('movie');
            article.innerHTML = movie(data);
            this.fragmrnt.appendChild(article);
        });
        // debugger
    }
}
