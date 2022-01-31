'use strict';

// let numbersOfFilms;

// function start () {
// 	numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
// 	while(numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
// 		numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
// 	}
// }

// start();

// const personalMovieDB = {
// 	count: numbersOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// function rememberMyFilms () {
// 	for(let i = 0; i < 2; i++) {
// 		const	a = prompt('Один из послдедних просмотренных фильмов?', ''),
// 				b = +prompt('на сколько оценити его?', '');
// 		if(a != null && b != null && a != '' && b != '' && a.length < 50 && b <= 10) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('Done');
// 		}else {
// 			console.log('error');
// 			i--;
// 		}
// 		personalMovieDB.movies[a] = b;
// 	}
// }

// rememberMyFilms();


// function writeYourGenres() {
// 	for(let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номерои ${i}?`, '');
// 	}
// }
// writeYourGenres();

// function  detectPersonalLevel() {
// 	if(personalMovieDB.count < 10 && personalMovieDB.count != null) {
// 		alert('Просмотренно довольно мало фильмов');
// 	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		alert('Вы классический зритель');
// 	} else if(personalMovieDB.count >= 30) {
// 		alert('Вы киноман');
// 	} else {
// 		alert('Что то пошло не так :-(');
// 	}
// }

// detectPersonalLevel();


// function showMyDB(hidden) {
// 	if(!hidden){
// 		console.log(personalMovieDB);
// 	}
// }
// showMyDB(personalMovieDB.privat);

