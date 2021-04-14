//fix menu on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const navbarContainer = document.querySelector(".navbar-container");
    navbar.classList.toggle("fixed", window.scrollY > 80);
    navbarContainer.classList.toggle("navbar-container-margin", window.scrollY > 80);
})

//close menu
const menuLink = $(".navbar-links");
const burger = $(".burger-menu");

$(burger).on("click", () => {
    menuLink.toggleClass('nav-active');
    burger.toggleClass('toggle');
})

$('.navbar-links ul li a').on("click", function (e) {
    menuLink.click().removeClass("nav-active");
    burger.removeClass('toggle');
});


// scroll event
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
