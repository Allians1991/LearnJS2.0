window.addEventListener('DOMContentLoaded', ()=> {

	// Tabs

	const tabsParent = document.querySelector('.tabheader__items'),
			tabs = tabsParent.querySelectorAll('.tabheader__item'),
			tabsContent = document.querySelectorAll('.tabcontent');
			
	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if(target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) =>{
				if(item == target) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}

	});

	// Timer

	const deadline = '2022-08-30';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
				days = Math.floor(t / (1000 * 60 * 60 * 24)),
				hours = Math.floor(t / (1000 * 60 * 60) % 24),
				minutes = Math.floor(t / (1000 * 60) % 60),
				seconds = Math.floor(t / 1000 % 60);
		
				
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};

	}

	function getZero(num) {
		if(num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minutes = timer.querySelector('#minutes'),
				seconds = timer.querySelector('#seconds'),
				timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if(t.total <= 0) {
				clearInterval(timeInterval);
			}
		}

	}
	
	setClock('.timer', deadline);


	// Modal
	const modalTrigger = document.querySelectorAll('[data-modal]'),
			modal = document.querySelector('.modal'),
			modalClose = document.querySelector('[data-close]');
			// modalTimerId = setTimeout(showModal, 15000);

	function showModal () {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		// clearInterval(modalTimerId);
	}

	function hideModal () {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', showModal);
	});
	
	modalClose.addEventListener('click', hideModal);

	modal.addEventListener('click', (event) => {
		if(event.target === modal) {
			hideModal();
		}
	});
	document.addEventListener('keydown', (event) => {
		if(event.key === 'Escape' && modal.classList.contains('show')) {
			hideModal();
		}
	});

	function showModalByScroll() {
		if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			showModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);



	// Генерация карточек меню.

	class MenuCard {
		constructor(src, alt, title, desc, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.desc = desc;
			this.price = price;
			this.classes = classes;
			this.transfer = 84;
			this.parent = document.querySelector(parentSelector);
			this.changeRUR();
		}

		changeRUR() {
			this.price = this.transfer * this.price;
		}

		render() {
			const element = document.createElement('div');
			if(this.classes.length ==0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}
			
			element.innerHTML = `
					<img src=${this.src} alt=${this.alt}>
					<h3 class="menu__item-subtitle">${this.title}</h3>
					<div class="menu__item-descr">${this.desc}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> руб/день</div>
					</div>`;

			this.parent.append(element);
		}
	}

	new MenuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		7,
		'.menu .container'
	).render();

	new MenuCard(
		"img/tabs/elite.jpg",
		"elite",
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		10,
		'.menu .container'
	).render();

	new MenuCard(
		"img/tabs/post.jpg",
		"post",
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		15,
		'.menu .container'
	).render();

	// Отправка формы
	const forms = document.querySelectorAll('form'),
		  message = {
			  load: 'Загрузка',
			  success: 'Спасибо! Скоро мы с Вами свяжимся',
			  bad: 'Что то пошло не так.. Попробуйте позже'
		  };

	forms.forEach(item => {
		postData(item);
	});

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const messageBlock = document.createElement('div');
			messageBlock.classList.add('status');
			messageBlock.innerHTML = message.load;

			form.append(messageBlock);

			const request = new XMLHttpRequest();

			request.open('POST', 'server.php');

			const formFata = new FormData(form); 

			request.send(formFata);

			request.addEventListener('load', () =>{
				if(request.status === 200) {
					console.log(request.response);
					form.reset();
					messageBlock.innerHTML = message.success;

					setTimeout(() => {
						messageBlock.remove();
					}, 2000);
				} else {
					messageBlock.innerHTML = message.bad;
				}
			});

		});
	}

});