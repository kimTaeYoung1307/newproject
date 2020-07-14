const slideWrap = document.querySelector(".rotate_content");
const slideContent = document.querySelector(".slider_content");
const slider = document.querySelectorAll(".slider");
const Aprev = document.getElementById("prev");
const Anext = document.getElementById("next");

let slideHeight = 0;
let slideCount = slider.length;
let currentIndex = 0;

function slideA() {
  for (let a = 0; a < slideCount; a++) {
    slider[a].style.left = a * 100 + "%";
  }
}

function goToSide(idx) {
  slideContent.style.left = -100 * idx + "%";
  currentIndex = idx;
}

function CKPV() {
  if (currentIndex === 0) {
    goToSide(slideCount - 1);
  } else {
    goToSide(currentIndex - 1);
  }
}

function CKNT() {
  if (currentIndex === slideCount - 1) {
    goToSide(0);
  } else {
    goToSide(currentIndex + 1);
  }
}

function init() {
  slideA();
  Anext.addEventListener("click", CKNT);
  Aprev.addEventListener("click", CKPV);
}

init();
