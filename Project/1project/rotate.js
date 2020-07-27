const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const rotates = document.querySelector(".Rotate__ul");
const imgs = document.querySelectorAll(".imgs");
const Btn = document.querySelectorAll(".Btn_list");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");
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
    Btn[a].style.color = "black";
    Btn[b].style.color = "rgb(219, 218, 218)";
    Btn[c].style.color = "rgb(219, 218, 218)";
    Btn[d].style.color = "rgb(219, 218, 218)";
    Btn[e].style.color = "rgb(219, 218, 218)";
    Btn[f].style.color = "rgb(219, 218, 218)";
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
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
    Btn[a].style.color = "rgb(219, 218, 218)";
    Btn[b].style.color = "black";
    Btn[c].style.color = "rgb(219, 218, 218)";
    Btn[d].style.color = "rgb(219, 218, 218)";
    Btn[e].style.color = "rgb(219, 218, 218)";
    Btn[f].style.color = "rgb(219, 218, 218)";
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
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
    Btn[a].style.color = "rgb(219, 218, 218)";
    Btn[b].style.color = "rgb(219, 218, 218)";
    Btn[c].style.color = "black";
    Btn[d].style.color = "rgb(219, 218, 218)";
    Btn[e].style.color = "rgb(219, 218, 218)";
    Btn[f].style.color = "rgb(219, 218, 218)";
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
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
    Btn[a].style.color = "rgb(219, 218, 218)";
    Btn[b].style.color = "rgb(219, 218, 218)";
    Btn[c].style.color = "rgb(219, 218, 218)";
    Btn[d].style.color = "black";
    Btn[e].style.color = "rgb(219, 218, 218)";
    Btn[f].style.color = "rgb(219, 218, 218)";
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "block";
    page5.style.display = "none";
    page6.style.display = "none";
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
    Btn[a].style.color = "rgb(219, 218, 218)";
    Btn[b].style.color = "rgb(219, 218, 218)";
    Btn[c].style.color = "rgb(219, 218, 218)";
    Btn[d].style.color = "rgb(219, 218, 218)";
    Btn[e].style.color = "black";
    Btn[f].style.color = "rgb(219, 218, 218)";
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "block";
    page6.style.display = "none";
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
    Btn[a].style.color = "rgb(219, 218, 218)";
    Btn[b].style.color = "rgb(219, 218, 218)";
    Btn[c].style.color = "rgb(219, 218, 218)";
    Btn[d].style.color = "rgb(219, 218, 218)";
    Btn[e].style.color = "rgb(219, 218, 218)";
    Btn[f].style.color = "black";
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "block";
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

function Bnext() {
  imgs[0].style.transition = "all 1s ease";
  imgs[0].style.opacity = 1;
  imgs[1].style.transition = "all 1s ease";
  imgs[1].style.opacity = 0;
  imgs[2].style.transition = "all 1s ease";
  imgs[2].style.opacity = 0;
  imgs[3].style.transition = "all 1s ease";
  imgs[3].style.opacity = 0;
  imgs[4].style.transition = "all 1s ease";
  imgs[4].style.opacity = 0;
  imgs[5].style.transition = "all 1s ease";
  imgs[5].style.opacity = 0;
  Btn[0].style.color = "black";
  Btn[1].style.color = "rgb(219, 218, 218)";
  Btn[2].style.color = "rgb(219, 218, 218)";
  Btn[3].style.color = "rgb(219, 218, 218)";
  Btn[4].style.color = "rgb(219, 218, 218)";
  Btn[5].style.color = "rgb(219, 218, 218)";
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";
  swp = 0;
}
function Bnext1() {
  imgs[0].style.transition = "all 1s ease";
  imgs[0].style.opacity = 0;
  imgs[1].style.transition = "all 1s ease";
  imgs[1].style.opacity = 1;
  imgs[2].style.transition = "all 1s ease";
  imgs[2].style.opacity = 0;
  imgs[3].style.transition = "all 1s ease";
  imgs[3].style.opacity = 0;
  imgs[4].style.transition = "all 1s ease";
  imgs[4].style.opacity = 0;
  imgs[5].style.transition = "all 1s ease";
  imgs[5].style.opacity = 0;
  Btn[0].style.color = "rgb(219, 218, 218)";
  Btn[1].style.color = "black";
  Btn[2].style.color = "rgb(219, 218, 218)";
  Btn[3].style.color = "rgb(219, 218, 218)";
  Btn[4].style.color = "rgb(219, 218, 218)";
  Btn[5].style.color = "rgb(219, 218, 218)";
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";
  swp = 1;
}

function Bnext2() {
  imgs[0].style.transition = "all 1s ease";
  imgs[0].style.opacity = 0;
  imgs[1].style.transition = "all 1s ease";
  imgs[1].style.opacity = 0;
  imgs[2].style.transition = "all 1s ease";
  imgs[2].style.opacity = 1;
  imgs[3].style.transition = "all 1s ease";
  imgs[3].style.opacity = 0;
  imgs[4].style.transition = "all 1s ease";
  imgs[4].style.opacity = 0;
  imgs[5].style.transition = "all 1s ease";
  imgs[5].style.opacity = 0;
  Btn[0].style.color = "rgb(219, 218, 218)";
  Btn[1].style.color = "rgb(219, 218, 218)";
  Btn[2].style.color = "black";
  Btn[3].style.color = "rgb(219, 218, 218)";
  Btn[4].style.color = "rgb(219, 218, 218)";
  Btn[5].style.color = "rgb(219, 218, 218)";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "block";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";
  swp = 2;
}

function Bnext3() {
  imgs[0].style.transition = "all 1s ease";
  imgs[0].style.opacity = 0;
  imgs[1].style.transition = "all 1s ease";
  imgs[1].style.opacity = 0;
  imgs[2].style.transition = "all 1s ease";
  imgs[2].style.opacity = 0;
  imgs[3].style.transition = "all 1s ease";
  imgs[3].style.opacity = 1;
  imgs[4].style.transition = "all 1s ease";
  imgs[4].style.opacity = 0;
  imgs[5].style.transition = "all 1s ease";
  imgs[5].style.opacity = 0;
  Btn[0].style.color = "rgb(219, 218, 218)";
  Btn[1].style.color = "rgb(219, 218, 218)";
  Btn[2].style.color = "rgb(219, 218, 218)";
  Btn[3].style.color = "black";
  Btn[4].style.color = "rgb(219, 218, 218)";
  Btn[5].style.color = "rgb(219, 218, 218)";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
  page5.style.display = "none";
  page6.style.display = "none";
  swp = 3;
}
function Bnext4() {
  imgs[0].style.transition = "all 1s ease";
  imgs[0].style.opacity = 0;
  imgs[1].style.transition = "all 1s ease";
  imgs[1].style.opacity = 0;
  imgs[2].style.transition = "all 1s ease";
  imgs[2].style.opacity = 0;
  imgs[3].style.transition = "all 1s ease";
  imgs[3].style.opacity = 0;
  imgs[4].style.transition = "all 1s ease";
  imgs[4].style.opacity = 1;
  imgs[5].style.transition = "all 1s ease";
  imgs[5].style.opacity = 0;
  Btn[0].style.color = "rgb(219, 218, 218)";
  Btn[1].style.color = "rgb(219, 218, 218)";
  Btn[2].style.color = "rgb(219, 218, 218)";
  Btn[3].style.color = "rgb(219, 218, 218)";
  Btn[4].style.color = "black";
  Btn[5].style.color = "rgb(219, 218, 218)";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "block";
  page6.style.display = "none";
  swp = 4;
}

function Bnext5() {
  imgs[0].style.transition = "all 1s ease";
  imgs[0].style.opacity = 0;
  imgs[1].style.transition = "all 1s ease";
  imgs[1].style.opacity = 0;
  imgs[2].style.transition = "all 1s ease";
  imgs[2].style.opacity = 0;
  imgs[3].style.transition = "all 1s ease";
  imgs[3].style.opacity = 0;
  imgs[4].style.transition = "all 1s ease";
  imgs[4].style.opacity = 0;
  imgs[5].style.transition = "all 1s ease";
  imgs[5].style.opacity = 1;
  Btn[0].style.color = "rgb(219, 218, 218)";
  Btn[1].style.color = "rgb(219, 218, 218)";
  Btn[2].style.color = "rgb(219, 218, 218)";
  Btn[3].style.color = "rgb(219, 218, 218)";
  Btn[4].style.color = "rgb(219, 218, 218)";
  Btn[5].style.color = "black";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "block";
  swp = 4;
}

function init() {
  next.addEventListener("click", rotate_Next);
  prev.addEventListener("click", rotate_prev);
  Btn[0].addEventListener("click", Bnext);
  Btn[1].addEventListener("click", Bnext1);
  Btn[2].addEventListener("click", Bnext2);
  Btn[3].addEventListener("click", Bnext3);
  Btn[4].addEventListener("click", Bnext4);
  Btn[5].addEventListener("click", Bnext5);
}

init();
