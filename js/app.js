'use strict';

const numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		




const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


const a = prompt('Один из послдедних просмотренных фильмов?', ''),
		b = +prompt('на сколько оценити его?', ''),
		c = prompt('Один из послдедних просмотренных фильмов?', ''),
		d = +prompt('на сколько оценити его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;





console.log(personalMovieDB);
