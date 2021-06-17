//fix menu on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const navbarContainer = document.querySelector(".navbar-container");
    navbar.classList.toggle("fixed", window.scrollY > 80);
    navbarContainer.classList.toggle("navbar-container-margin", window.scrollY > 80);
})

 // burger
 const burgerMenu = document.querySelector(".burger-menu");
 const menuLink = document.querySelector(".navbar-links");
 const menuLinkItems = document.querySelectorAll(".navbar-links__list-item");
// const links = [...document.querySelectorAll(".navbar-links__link")];


 burgerMenu.addEventListener("click", () => {
     burgerMenu.classList.toggle("open");
     menuLink.classList.toggle("nav-active");
 });

 for (let i = 0; i < menuLinkItems.length; i++ ) {
    menuLinkItems[i].addEventListener("click", () => {
        burgerMenu.classList.remove("open");
        menuLink.classList.remove("nav-active");
    });
 }

 // prevent submit reload for now
 const submitBtn = document.getElementById("submit-btn");
 submitBtn.addEventListener("click", (e) => {
     e.preventDefault();
 });
