

'use strict';

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
		movieList = document.querySelector('.promo__interactive-list');

adv.forEach(element => {
	element.remove();
});


// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = "Драма";


/* 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
		Реализовать только при помощи JS */
promoBg.style.cssText = 'background: url("../img/bg.jpg");';


/* 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
		Отсортировать их по алфавиту
	5) Добавить нумерацию выведенных фильмов */

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film , i) =>{
	movieList.innerHTML += `
		<li class="promo__interactive-item">${i + 1}. ${film}
			<div class="delete"></div>
		</li>
	`;
});
