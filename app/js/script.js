const hamburger = document.querySelector('.header_hamburger');
const burgerMenu = document.querySelector('.header_overlay');



hamburger.addEventListener('click', function() {

    if(burgerMenu.classList.contains('hidden')) {
        burgerMenu.classList.add('show');
        burgerMenu.classList.remove('hidden');
    } else {
        burgerMenu.classList.add('hidden');
        burgerMenu.classList.remove('show');
    }
});