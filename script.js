function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

window.addEventListener('resize', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    if (window.innerWidth <= 768) {
        menuIcon.style.display = 'block';
        menu.classList.remove('show-menu');
    } else {
        menuIcon.style.display = 'none';
        menu.classList.remove('show-menu');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.style.display = 'block';
    }
});
