"use sctrict";

 const numberOfFilms = prompt('How much films you viewed?', '');

 const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
 };

 const lastViewedFilm = prompt('You last viewed film?', '');
 const reitFilm = prompt('How much you rating him?', '');

 personalMovieDB.movies[lastViewedFilm] = reitFilm;

 console.log(personalMovieDB);