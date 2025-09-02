let navMenuBtn = document.querySelector("#site-nav .menu .bx");
let navLinksMenu = document.querySelector("#site-nav .submenu");

navMenuBtn.addEventListener("click", e => {
    if (navLinksMenu.classList.contains("open")) {
        navLinksMenu.classList.remove("open");
    } else {
        navLinksMenu.classList.add("open");
    }
});

window.addEventListener("resize", e => {
    navLinksMenu.classList.remove("open");
})