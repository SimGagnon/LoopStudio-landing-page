const hamburger = document.querySelector('.header_hamburger');
const burgerMenu = document.querySelector('.header_overlay');
const body = document.querySelector('body');



hamburger.addEventListener('click', function() {

    if(burgerMenu.classList.contains('hidden')) {
        burgerMenu.classList.add('show');
        burgerMenu.classList.remove('hidden');
        hamburger.classList.add('open');
    } else {
        burgerMenu.classList.add('hidden');
        burgerMenu.classList.remove('show');
        hamburger.classList.remove('open');
    }
});