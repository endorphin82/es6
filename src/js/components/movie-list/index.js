import movie from '../movie';

export default class MovieList {
    constructor(data){
        this.data = data;
    }

    drawToDom(selector){
        selector.innerHTML = this.movieList;
    }

    renderMovie(){
        this.fragmrnt = document.createDocumentFragment();

        data.forEach(data =>{
            this.fragmrnt.appendChild(movie(data));
        });
    }

}
