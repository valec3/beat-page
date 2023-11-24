const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close"),
    nav = document.querySelector(".nav"),
    scrollUp = document.querySelector(".scroll-up");

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

// prevent event default global
window.addEventListener("click", (e) => {
    e.preventDefault();
});

// scroll up active
function scrollUpActive(){
    if(this.scrollY >= 200)
        scrollUp.classList.add("show-scroll");
    else
        scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUpActive);

scrollUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// Section active link

const sections = document.querySelectorAll(".section");
const navLink = document.querySelectorAll(".nav__link");

function scrollActive(){
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");
        console.log(sectionId);
        if(!["home", "specs", "case","products"].includes(sectionId)) return;
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navLink.forEach(link => {
                link.classList.remove("active-link");
            })
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
        }
    })
}
window.addEventListener("scroll", scrollActive);