// JavaScript Document
document.querySelector(".hamburger")
        .addEventListener("click", toggle)

function toggle(){
    var menu = document.querySelector(".menu")
    
    if (menu.classList.contains("menu")) {
        menu.classList.add("visible")
        menu.classList.remove("hidden")
    }
    else {
        menu.classList.add("hidden")
        menu.classList.remove("visible")
    }
} 