window.addEventListener('scroll', e => {
	//document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Новый метод
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

const mainBox = document.querySelector('.main-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');


registerLink.addEventListener('click', (e) => {
    mainBox.classList.add('active');
	e.preventDefault();
});

loginLink.addEventListener('click', (e) => {
    mainBox.classList.remove('active');
	e.preventDefault();
});


