const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close"),
    nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    nav.classList.add("active");
})
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    nav.classList.remove("active");
})

// Remove menu mobile
window.addEventListener("scroll", () => {
    navMenu.classList.remove("show-menu");
    nav.classList.remove("active");
})