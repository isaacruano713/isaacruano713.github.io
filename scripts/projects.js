// Slding Widget
let navMenuBtn = document.querySelector("#site-nav .menu .bx");
let navLinksMenu = document.querySelector("#site-nav .submenu");
const sw = new SlidingWindow(undefined, "#44454A", "#888888", "white");
sw.build();

// Prevents a project summary from being displayed given its id index
function destroySummary(index) {
    const destroy = "project-summary" + index;
    document.getElementById(destroy).style.display = "none";
}

// Display a project summary given its id index
function createSummary(index) {
    const create = "project-summary" + index;
    document.getElementById(create).style.display = "block";
}

sw.left.addEventListener("click", function() {
    const previous = sw.options.nextIndex();
    const current = sw.options.currentIndex();
    destroySummary(previous);
    createSummary(current);
});

sw.right.addEventListener("click", function() {
    const previous = sw.options.previousIndex();
    const current = sw.options.currentIndex();
    destroySummary(previous);
    createSummary(current);
});

navMenuBtn.addEventListener("click", e => {
    if (navLinksMenu.classList.contains("open")) {
        navLinksMenu.classList.remove("open");
    } else {
        navLinksMenu.classList.add("open");
    }
});

// Project Pictures Container
const pps = document.querySelectorAll(".project-pictures-container .overlay-container");
for (let i = 0; i < pps.length; i++) {
    pps[i].addEventListener("click", e => {
        let lower = i > 0 ? i - 1 : pps.length - 1;
        let upper = i < pps.length - 1 ? i + 1 : 0;
        destroySummary(lower);
        console.log("destroyed: " + lower);
        destroySummary(upper);
        console.log("destroyed: " + upper);
        createSummary(i);
        console.log("created: " + i);
    });
}

window.addEventListener("resize", e => {
    navLinksMenu.classList.remove("open");
})