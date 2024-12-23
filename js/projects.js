document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const burgerIcon = document.querySelector('.burger-icon');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });
}); 