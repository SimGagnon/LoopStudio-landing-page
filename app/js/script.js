const hamburger = document.querySelector('.header_hamburger');
const burgerMenu = document.querySelector('.header_overlay');
const body = document.querySelector('body');



hamburger.addEventListener('click', function () {

    if (!hamburger.classList.contains('open')) {
        burgerMenu.classList.add('show');
        hamburger.classList.add('open');
        
    } else {
        hamburger.classList.remove('open');
        burgerMenu.classList.remove('show');
    }
});