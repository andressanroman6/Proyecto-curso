
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('navbar__list--open');
    hamburger.classList.toggle('navbar__hamburger--open');
    }
)


    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('navbar__list--open');
            hamburger.classList.remove('navbar__hamburger--open');
        });
    });