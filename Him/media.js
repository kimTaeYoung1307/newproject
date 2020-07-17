const toogle = document.querySelector(".nav_toogle");
const menu = document.querySelector(".nav_menu");
const icon = document.querySelector(".nav_icon");

function getApplyStyle(obj, prop) {
  if (obj.currentStyle) {
    var style = obj.currentStyle[prop];
  } else if (window.getComputedStyle) {
    var style = window.getComputedStyle(obj, null)[prop];
  }
  return style;
}

function init() {
  toogle.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  });
}

init();
