const nav = document.querySelector('.expand-nav');
const hamburger = document.querySelector('.hamburger--squeeze');

function navToggle() {
    if (nav.classList.contains("nav--visible")) {
        nav.classList.remove('nav--visible');
        hamburger.classList.remove('is-active');
    }
    else {
        nav.classList.add('nav--visible');
        hamburger.classList.add('is-active');
    }
}

function navLarge() {
    const mediaQuery = window.matchMedia('(min-width: 700px)')
    if (mediaQuery.matches) {
        nav.classList.add('nav--visible');
    }
    else {
        nav.classList.remove('nav--visible');
    }
}

$(document).ready(function() {
    navLarge()
});

$(window).resize(function() {
    navLarge()
});