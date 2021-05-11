const hamburger = document.querySelector('.header__hamburger');
const burgerMenu = document.querySelector('.header__overlay');
const body = document.querySelector('body');
const mobileList = document.querySelectorAll(".header__overlay li");

hamburger.addEventListener('click', function () {

    if (!hamburger.classList.contains('open')) {
        burgerMenu.classList.add('show');
        hamburger.classList.add('open');
        body.classList.add('noscroll');
        mobileList.forEach(function (e) {
            e.classList.add("slide_in");
            e.classList.remove("fade_out");
        });

    } else {
        hamburger.classList.remove('open');
        burgerMenu.classList.remove('show');
        body.classList.remove('noscroll');
        mobileList.forEach(function (e) {
            e.classList.remove("slide_in");
            e.classList.add("fade_out");
        });
    }
});