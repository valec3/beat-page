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

// Remove menu mobile when scroll
window.addEventListener("scroll", () => {
    navMenu.classList.remove("show-menu");
    nav.classList.remove("active");
})

function scrollHeader(){
    const header = document.querySelector("#header");
    if(this.scrollY >= 50) 
        header.classList.add("scroll-header"); 
    else 
        header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
