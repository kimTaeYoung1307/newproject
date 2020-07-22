const toogle = document.querySelector(".nav_toogle");
const menu = document.querySelector(".nav_menu");
const icon = document.querySelector(".nav_icon");
const tmgsm = document.querySelector(".imgsm");

let qws = 0;

function imgturn() {
  if (qws === 0) {
    tmgsm.style.transition = "all 2s ease";
    tmgsm.style.transform = `rotate(150deg)`;
    qws = 1;
  } else {
    tmgsm.style.transition = "all 2s ease";
    tmgsm.style.transform = `rotate(0deg)`;
    qws = 0;
  }
}

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
  setInterval(imgturn, 2000);
}

init();
