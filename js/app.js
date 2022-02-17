'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for(let i = 0; i < 2; i++) {
			const	a = prompt('Один из послдедних просмотренных фильмов?', ''),
					b = +prompt('на сколько оценити его?', '');
			if(a != null && b != null && a != '' && b != '' && a.length < 50 && b <= 10) {
				personalMovieDB.movies[a] = b;
				console.log('Done');
			}else {
				console.log('error');
				i--;
			}
			personalMovieDB.movies[a] = b;
		}
	},
	
	writeYourGenres: function () {
		for(let i = 1; i < 2; i++) {

			let genres = prompt(`Введите Ваш любимый жанр через запятую`).toLowerCase();

			if (genres === '' || genres == null) {
				console.log('Неверно');
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
	detectPersonalLevel: function () {
		if(personalMovieDB.count < 10 && personalMovieDB.count != null) {
			alert('Просмотренно довольно мало фильмов');
		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if(personalMovieDB.count >= 30) {
			alert('Вы киноман');
		} else {
			alert('Что то пошло не так :-(');
		}
	},
	showMyDB: function(hidden) {
		if(!hidden){
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};



