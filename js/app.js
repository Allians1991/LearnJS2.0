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
		}

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
			modalClose = document.querySelector('[data-close]'),
			modalTimerId = setTimeout(showModal, 15000);

	function showModal () {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	function hideModal () {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', showModal);
	})
	
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

});