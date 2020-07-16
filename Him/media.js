const toogle = document.querySelector(".nav_toogle");
const menu = document.querySelector(".nav_menu");
const icon = document.querySelector(".nav_icon");

function init() {
  toogle.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  });
}

init();
