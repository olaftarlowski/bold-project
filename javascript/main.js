const navSlider = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.navbar-links');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    });
};

navSlider();

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("fixed", window.scrollY > 80);
})
