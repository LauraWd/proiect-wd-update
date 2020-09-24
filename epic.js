// JavaScript Document
document.querySelector(".hamburger")
        .addEventListener("click", toggle)

function toggle() {
    var menu1 = document.querySelector("#menu1")
    var menu2 = document.querySelector("#meniu2")
    
    if (menu1.classList.contains("hidden")) {
        menu1.classList.add("visible")
        menu1.classList.remove("hidden")
        menu2.classList.add("visible")
        menu2.classList.remove("hidden")
    }
    else {
        menu1.classList.add("hidden")
        menu1.classList.remove("visible")
        menu2.classList.add("hidden")
        menu2.classList.remove("visible")
    }
} 