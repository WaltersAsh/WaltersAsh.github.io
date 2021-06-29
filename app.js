function mobileNav() {
    const menuButton = document.querySelector('.nav-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links li');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-nav-active');

        navLinksList.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksTrans 0.5s ease forwards ${i / 7 + 0.35}s`;
            }
        });

        menuButton.classList.toggle('menu-clicked')
    });

}

function main() {
    mobileNav();
}

main();