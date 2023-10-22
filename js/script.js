"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".navbar__main-menu");
    const menuButton = document.querySelector(".navbar__mobile-menu-button");
    const buttonIcon = document.querySelector(".menu-button-icon");

    let isMenuOpened = false;

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
        menu.classList.toggle("slide-out");
        overlay.classList.toggle("visible");
        overlay.classList.toggle("fade-out");
        isMenuOpened = !isMenuOpened;
        buttonIcon.src = `assets/images/icon-menu${
            isMenuOpened ? "-close" : ""
        }.svg`;
    });
});
