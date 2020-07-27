const main = document.querySelector(".header__main");
const nav = document.querySelector(".header__nav");
const togle = document.querySelector(".toggle");
const inner = document.querySelector(".header");

function init() {
  togle.addEventListener("click", () => {
    nav.classList.toggle("active");
    main.classList.toggle("active");
    inner.classList.toggle("long");
  });
}

init();
