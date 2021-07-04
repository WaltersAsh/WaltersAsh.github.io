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

function endSpinner() {
    const spin = document.querySelector('.spin-wrapper');
    spin.parentElement.removeChild(spin);
    document.querySelector('body').classList.add('fade');
}

function showPages(homePageStatus, aboutPageStatus, projectsPageStatus) {
    var home = document.getElementsByClassName('home');
    var about = document.getElementsByClassName('about');
    var projects = document.getElementsByClassName('projects');

    for (var i = 0; i < home.length; i++) {
        home[i].style.display = homePageStatus;
    }
    for (var i = 0; i < about.length; i++) {
        about[i].style.display = aboutPageStatus;
    }
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = projectsPageStatus;
    }
}

function main() {
    mobileNav();
    setTimeout(function() { endSpinner(); }, 1500);
    document.querySelector('body').classList.remove('fade');
}

main();