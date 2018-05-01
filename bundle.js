/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_KEY = "c5e671d77ad5ead1175111461993f8ea";

exports.default = {
  searchMovieUrl: "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=",
  imageSrc: "http://image.tmdb.org/t/p/w185",
  noImageSrc: "http://babakunyho.eu/img/default-no-image.png"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _movieList = __webpack_require__(2);

var _movieList2 = _interopRequireDefault(_movieList);

var _moviesService = __webpack_require__(4);

var _moviesService2 = _interopRequireDefault(_moviesService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = document.querySelector('.search-input');
var movieList = document.querySelector('.movies');
var list = new _movieList2.default();
var filters = document.querySelector('.filters');

input.addEventListener('input', function (e) {
  var searchText = e.target.value;

  if (!searchText) {
    list.clearList(movieList);
    return;
  }

  _moviesService2.default.getVideoByText(searchText)
  //.then(result => console.log(result)) //ok
  .then(function (result) {
    // const list = new MovieList(result)
    list.renderMovies(result);
    list.drawToDom(movieList);
  });
});

filters.addEventListener('click', function (e) {
  e.preventDefault();
  debugger;
  var target = e.target;
  var dataAttr = target.getAttribute('data-filter');

  if (!dataAttr) {
    return;
  }

  list.sort(dataAttr);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movie = __webpack_require__(3);

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieList = function () {
  function MovieList() {
    _classCallCheck(this, MovieList);
  }

  _createClass(MovieList, [{
    key: 'drawToDom',
    value: function drawToDom(selector) {
      this.clearList(selector);
      selector.appendChild(this.fragmrnt);
    }
  }, {
    key: 'renderMovies',
    value: function renderMovies(data) {
      var _this = this;

      this.data = data;
      this.fragmrnt = document.createDocumentFragment();
      //  console.log(this.data.results)
      // if (error) return console.error('sa'+error)
      this.data.results.forEach(function (data) {
        var article = document.createElement('article');
        article.classList.add('movie');
        article.classList.add('col-md-4');

        article.innerHTML = (0, _movie2.default)(data);
        _this.fragmrnt.appendChild(article);
      });
      // debugger
    }
  }, {
    key: 'clearList',
    value: function clearList(selector) {
      selector.innerHTML = '';
    }
  }, {
    key: 'sort',
    value: function sort(filter) {
      if (filter = 'raitingMax') {
        this.sortByMaxRaiting();
      }
      if (filter = 'raitingMin') {}
      if (filter = 'dateNew') {}
      if (filter = 'dateOld') {}
    }
  }, {
    key: 'sortByMaxRaiting',
    value: function sortByMaxRaiting() {
      this.data.results.sort(function (a, b) {
        if (a.popularity > b.popularity) {
          return 1;
        }
        if (a.popularity < b.popularity) {
          return -1;
        }
      });
    }
  }]);

  return MovieList;
}();

exports.default = MovieList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = movie;

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movie(data) {
  var mappingData = mapData(data);
  var html = '\n        <h2 class="movie-title">' + mappingData.title + '</h2>\n        <date class="date">' + mappingData.date + '</date>\n        <div class="country">' + mappingData.country + '</div>\n        <div class="picture"><img src=\'' + mappingData.img + '\'></div>\n        <div class="language">' + mappingData.language + '</div>\n        <div class="overview">' + mappingData.overview + '</div>\n        <div>' + mappingData.popularity + '</div>                              \n        <div class="popularity">' + mappingData.id + '</div>                              \n    ';
  return html;
}

function mapData(data) {
  var defaultValue = 'Unknown';
  return {
    title: data.title || data.name || defaultValue,
    date: data.release_date || data.first_air_date || defaultValue,
    country: data.origin_country || defaultValue,
    img: getPictureUrl(),
    language: data.origin_language || defaultValue,
    overview: data.overview || defaultValue,
    popularity: data.popularity || defaultValue,
    id: data.id || Date.now()
  };

  function getPictureUrl() {
    var url = data.backdrop_path || data.poster_path;

    if (url) {
      return _config2.default.imageSrc + url;
    } else {
      return _config2.default.noImageSrc;
    }
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getVideoByText(text) {
  if (!text) {
    return;
  }
  return fetch(_config2.default.searchMovieUrl + text).then(function (r) {
    return r.json();
  });
}

exports.default = {
  getVideoByText: getVideoByText
};

/***/ })
/******/ ]);