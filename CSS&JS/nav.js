var navBar = document.querySelector('nav');

if (window.outerWidth > 800) {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 70) {
            navBar.classList.add('nav-animation');
        } else {
            navBar.classList.remove('nav-animation');
        }
    });
}