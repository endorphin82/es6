import config from './config';
import MovieList from './components/movie-list';
// import movieList from './components/movie-list/index';

import moviesService from './movies-service';

const input = document.querySelector('.search-input');
input.addEventListener('input', e=>{
   const searchText = e.target.value;

     moviesService.getVideoByText(searchText)
     .then(result => console.log(result))
         .then(result => {
             new MovieList(result);
         })
});