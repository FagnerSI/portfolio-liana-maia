// MENU
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('is-open');

    navLinks.classList.toggle('is-open', isOpen);

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Fechar menu' : 'Abrir menu'
    );
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
});

// BACK TO TOP
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1.4) {
        backToTop.classList.add('is-visible');
    } else {
        backToTop.classList.remove('is-visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});