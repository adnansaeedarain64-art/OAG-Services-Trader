
// OAG Services & Traders
// Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // Close mobile menu after clicking a link
    document.querySelectorAll(".nav-menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }
        });
    });

    // Header shadow on scroll
    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", function () {
        if (header) {
            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });

    // Current year
    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

});
