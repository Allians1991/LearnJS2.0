'use strict';

const numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		
const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// for(let i = 0; i < 2; i++) {
// 	const	a = prompt('Один из послдедних просмотренных фильмов?', ''),
// 			b = +prompt('на сколько оценити его?', '');
// 	if(a != null && b != null && a != '' && b != '' && a.length < 50 && b <= 10) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('Done');
// 	}else {
// 		console.log('error');
// 		i--;
// 	}
// 	personalMovieDB.movies[a] = b;
// }


let i = 1;

//Цикл while
// while(i <= 2) {
// 	const	a = prompt('Один из послдедних просмотренных фильмов?', ''),
// 			b = +prompt('на сколько оценити его?', '');
// 	if(a != null && b != null && a != '' && b != '' && a.length < 50 && b <= 10) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('Done');
// 	}else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++;
// 	personalMovieDB.movies[a] = b;
// }

//Цикл do while
// do {
// 	const	a = prompt('Один из послдедних просмотренных фильмов?', ''),
// 			b = +prompt('на сколько оценити его?', '');
// 	if(a != null && b != null && a != '' && b != '' && a.length < 50 && b <= 10) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('Done');
// 	}else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++;
// 	personalMovieDB.movies[a] = b;
// }
// while(i <= 2);


if(personalMovieDB.count < 10 && personalMovieDB.count != null) {
	alert('Просмотренно довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if(personalMovieDB.count >= 30) {
	alert('Вы киноман');
} else {
	alert('Что то пошло не так :-(');
}







console.log(personalMovieDB);

