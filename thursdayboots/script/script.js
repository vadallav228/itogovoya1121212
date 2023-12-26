const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

const women = new Swiper('.w-cards-swiper', {
	wrapperClass: 'w-cards',
	slideClass: 'w-cards-slide',
	slidesPerView: 1,
	direction: 'horizontal',
	spaceBetween: 30,
})
const title = document.querySelector('.title_send')
const tippyHover = document.querySelectorAll('.w-card')
const overlay = document.querySelector('.overlay')
const overlayClose = document.querySelector('.feedback-close')
const body = document.querySelector('body')
overlayClose.addEventListener('click', () => {
	overlay.classList.toggle('overlay-hidden')
	body.classList.add('body_scroll')
	body.classList.remove('body_scroll')
	title.innerHTML = 'Let your contacts'
})
tippyHover.forEach(btn => {
	tippy(btn, {
		content: 'Click to do order',
		placement: 'bottom',
		duration: [300, 250],
	})
	btn.addEventListener('click', () => {
		overlay.classList.toggle('overlay-hidden')
		body.classList.add('body_scroll')
	})
})

const email = document.getElementById('email')
const nameInp = document.getElementById('name')
const secondname = document.getElementById('sname')

const sendBtn = document.querySelector('.submit')
const send = () => {
	if (email.value != '' && nameInp.value != '' && secondname != '') {
		title.innerHTML = 'Thanks, wait, we will call you back!'
		title.style.cssText = 'line-height: 50px'
	} else {
		alert('error!')
	}
}
sendBtn.addEventListener('click', send)
