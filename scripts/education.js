const navMenuBtn = document.querySelector("#site-nav .menu .bx");
const navLinksMenu = document.querySelector("#site-nav .submenu");
const accordionTabs = document.getElementsByClassName("accordion-tab");

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

window.onload = function() {
    for (let i = 0; i < accordionTabs.length; i++) {
        const tab = accordionTabs[i]
        tab.addEventListener("click", e => {
            const lowerContent = tab.nextElementSibling;
            if (lowerContent.style.maxHeight === "300px") {
                lowerContent.style.maxHeight = "0px";
            } else {
                lowerContent.style.maxHeight = "300px";
            }
            tab.querySelector("i").classList.toggle("rotated");
        })
    }
}