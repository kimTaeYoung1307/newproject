const btnP = document.querySelector(".btninner");
const btnN = document.querySelector(".btninnerNext");
const rolling = document.querySelector(".rolling__img");
const liroll = rolling.querySelectorAll("li");
const uiroll = rolling.querySelector("ul");

let nextroll = 0;
let two = 0;
let Ntwo = 2;

function nextss() {
  if (two < 2) {
    nextroll = nextroll + -321;
    liroll[0].style.transition = "all 1s ease";
    liroll[0].style.left = `${nextroll}px`;
    liroll[1].style.transition = "all 1s ease";
    liroll[1].style.left = `${nextroll}px`;
    liroll[2].style.transition = "all 1s ease";
    liroll[2].style.left = `${nextroll}px`;
    liroll[3].style.transition = "all 1s ease";
    liroll[3].style.left = `${nextroll}px`;
    liroll[4].style.transition = "all 1s ease";
    liroll[4].style.left = `${nextroll}px`;

    two = two + 1;
  }
  if (Ntwo > 0) {
    Ntwo = Ntwo - 1;
  }
  console.log(Ntwo);
  console.log(two);
}

function Prevss() {
  if (Ntwo < 2) {
    nextroll = nextroll + 311;
    liroll[0].style.transition = "all 1s ease";
    liroll[0].style.left = `${nextroll}px`;
    liroll[1].style.transition = "all 1s ease";
    liroll[1].style.left = `${nextroll}px`;
    liroll[2].style.transition = "all 1s ease";
    liroll[2].style.left = `${nextroll}px`;
    liroll[3].style.transition = "all 1s ease";
    liroll[3].style.left = `${nextroll}px`;
    liroll[4].style.transition = "all 1s ease";
    liroll[4].style.left = `${nextroll}px`;

    Ntwo = Ntwo + 1;
  }
  if (two > 0) {
    two = two - 1;
  }
  console.log(Ntwo);
  console.log(two);
}

function init() {
  btnN.addEventListener("click", nextss);
  btnP.addEventListener("click", Prevss);
}

init();
