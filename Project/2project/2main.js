const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imgs = document.querySelectorAll(".Rimg");
const Rtext = document.querySelector(".Rtextl");
const Rtextl = document.querySelector(".Rtextll");

let rotatecount = imgs.length;
let swp = 0;
let a = 0;
let b = 1;
let c = 2;
let d = 3;
let e = 4;
let f = 5;

function NEXT(idx) {
  if (a === idx) {
    imgs[a].style.transition = "all 1s ease";
    imgs[a].style.opacity = 1;
    imgs[b].style.transition = "all 1s ease";
    imgs[b].style.opacity = 0;
    imgs[c].style.transition = "all 1s ease";
    imgs[c].style.opacity = 0;
    imgs[d].style.transition = "all 1s ease";
    imgs[d].style.opacity = 0;
    imgs[e].style.transition = "all 1s ease";
    imgs[e].style.opacity = 0;
    imgs[f].style.transition = "all 1s ease";
    imgs[f].style.opacity = 0;
    Rtext.innerHTML = "즐거움엔 거리가없다";
    Rtextl.innerHTML = "BMW korea";
  }
  if (b === idx) {
    imgs[a].style.transition = "all 1s ease";
    imgs[a].style.opacity = 0;
    imgs[b].style.transition = "all 1s ease";
    imgs[b].style.opacity = 1;
    imgs[c].style.transition = "all 1s ease";
    imgs[c].style.opacity = 0;
    imgs[d].style.transition = "all 1s ease";
    imgs[d].style.opacity = 0;
    imgs[e].style.transition = "all 1s ease";
    imgs[e].style.opacity = 0;
    imgs[f].style.transition = "all 1s ease";
    imgs[f].style.opacity = 0;
    Rtext.innerHTML = "THE X5 M,THE X6 M ";
    Rtextl.innerHTML = "";
  }
  if (c === idx) {
    imgs[a].style.transition = "all 1s ease";
    imgs[a].style.opacity = 0;
    imgs[b].style.transition = "all 1s ease";
    imgs[b].style.opacity = 0;
    imgs[c].style.transition = "all 1s ease";
    imgs[c].style.opacity = 1;
    imgs[d].style.transition = "all 1s ease";
    imgs[d].style.opacity = 0;
    imgs[e].style.transition = "all 1s ease";
    imgs[e].style.opacity = 0;
    imgs[f].style.transition = "all 1s ease";
    imgs[f].style.opacity = 0;
    Rtext.innerHTML = "BMW eDRIVE.";
    Rtextl.innerHTML = "THE NEXT TYBRID.";
  }
  if (d === idx) {
    imgs[a].style.transition = "all 1s ease";
    imgs[a].style.opacity = 0;
    imgs[b].style.transition = "all 1s ease";
    imgs[b].style.opacity = 0;
    imgs[c].style.transition = "all 1s ease";
    imgs[c].style.opacity = 0;
    imgs[d].style.transition = "all 1s ease";
    imgs[d].style.opacity = 1;
    imgs[e].style.transition = "all 1s ease";
    imgs[e].style.opacity = 0;
    imgs[f].style.transition = "all 1s ease";
    imgs[f].style.opacity = 0;
    Rtext.innerHTML = "THE M8 GRAN COUPE";
    Rtextl.innerHTML = "";
  }
  if (e === idx) {
    imgs[a].style.transition = "all 1s ease";
    imgs[a].style.opacity = 0;
    imgs[b].style.transition = "all 1s ease";
    imgs[b].style.opacity = 0;
    imgs[c].style.transition = "all 1s ease";
    imgs[c].style.opacity = 0;
    imgs[d].style.transition = "all 1s ease";
    imgs[d].style.opacity = 0;
    imgs[e].style.transition = "all 1s ease";
    imgs[e].style.opacity = 1;
    imgs[f].style.transition = "all 1s ease";
    imgs[f].style.opacity = 0;
    Rtext.innerHTML = "THE 1";
    Rtextl.innerHTML = "";
  }
  if (f === idx) {
    imgs[a].style.transition = "all 1s ease";
    imgs[a].style.opacity = 0;
    imgs[b].style.transition = "all 1s ease";
    imgs[b].style.opacity = 0;
    imgs[c].style.transition = "all 1s ease";
    imgs[c].style.opacity = 0;
    imgs[d].style.transition = "all 1s ease";
    imgs[d].style.opacity = 0;
    imgs[e].style.transition = "all 1s ease";
    imgs[e].style.opacity = 0;
    imgs[f].style.transition = "all 1s ease";
    imgs[f].style.opacity = 1;
    Rtext.innerHTML = "THE 2 GRAN COUPE";
    Rtextl.innerHTML = "";
  }
}

function rotate_Next() {
  if (swp < rotatecount - 1) {
    NEXT((swp = swp + 1));
  } else {
    NEXT((swp = 0));
  }
}

function rotate_prev() {
  if (swp <= rotatecount - 1 && swp > 0) {
    NEXT((swp = swp - 1));
  } else if (swp <= 0) {
    NEXT((swp = 5));
  }
}

function init() {
  next.addEventListener("click", rotate_Next);
  prev.addEventListener("click", rotate_prev);
  setInterval(rotate_Next, 3000);
}

init();
