// JavaScript for toggling mobile and tablet menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    // Toggle the menu on mobile screens (phones)
    if (window.innerWidth <= 576) {
        nav.classList.toggle('show');
    } else {
        // Toggle the menu on tablet screens
        nav.classList.toggle('tablet-show');
    }
});

// Toggle menu on tablet when screen is resized to small
window.addEventListener('resize', () => {
    if (window.innerWidth <= 576) {
        nav.classList.remove('tablet-show');
    }
});
