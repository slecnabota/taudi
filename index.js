//menu
function openMenu() {
    let menu = document.querySelector(".header-burger")
    let icon = document.querySelector(".header__menu")
    icon.classList.toggle("active")
    menu.classList.toggle("active")
}