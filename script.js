
// Select the menu icon and nav links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const main = document.querySelector("main");

// Toggle the 'active' class on the nav links
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});
main.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('active');
});
