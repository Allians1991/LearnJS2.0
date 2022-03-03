

'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
				"Логан",
				"Лига справедливости",
				"Ла-ла лэнд",
				"Одержимость",
				"Скотт Пилигрим против..."
		]
	};

	// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
	const adv = document.querySelectorAll('.promo__adv img'),
			genre = document.querySelector('.promo__genre'),
			promoBg = document.querySelector('.promo__bg'),
			movieList = document.querySelector('.promo__interactive-list'),
			addForm = document.querySelector('form.add'),
			addInput = addForm.querySelector('.adding__input'),
			checkbox = addForm.querySelector('[type="checkbox"]');


	addForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let newFilm = addInput.value.toUpperCase();
		const favorite = checkbox.checked;

		if(newFilm) {

			if(newFilm.length > 21) {
				newFilm = `${newFilm.substr(0,22)}...`;
			}

			if(favorite) {
				console.log('Любимыый фильм');
			}
			sortArr(movieDB.movies);
			movieDB.movies.push(newFilm);
			createMovieList(movieDB.movies, movieList);
		}
		event.target.reset();
	});

	const deletAdv = (arr) => {
		arr.forEach(element => {
			element.remove();
		});
	};


	const makeChange = () =>{
	// 2) Изменить жанр фильма, поменять "комедия" на "драма"
	genre.textContent = "Драма";

	/* 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
			Реализовать только при помощи JS */
	promoBg.style.cssText = 'background: url("../img/bg.jpg");';

	};

	/* 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
			Отсортировать их по алфавиту
		5) Добавить нумерацию выведенных фильмов */
	const sortArr = (arr) => {
		arr.sort();
	};

	function createMovieList(films, parent) {
		parent.innerHTML = "";
		sortArr(films);

		films.forEach((film , i) =>{
			parent.innerHTML += `
				<li class="promo__interactive-item">${i + 1}. ${film}
					<div class="delete"></div>
				</li>
			`;

			document.querySelectorAll('.delete').forEach((btn, i) => {
				btn.addEventListener('click', () => {
					movieDB.movies.splice(i, 1);
					createMovieList(films, parent);
				});
			});
		});
	}

	deletAdv(adv);
	makeChange();
	createMovieList(movieDB.movies, movieList);

});




