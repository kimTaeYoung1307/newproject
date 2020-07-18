const Cbtn1 = document.querySelector(".Cbtn1");
const Cbtn2 = document.querySelector(".Cbtn2");
const Cbtn3 = document.querySelector(".Cbtn3");
const Cbtn4 = document.querySelector(".Cbtn4");

function centerBtn1() {
  Cbtn1.style.transition = "all 1s ease";
  Cbtn1.style.width = "50px";
  Cbtn1.style.backgroundColor = "red";
}
function centerBtn2() {}
function centerBtn3() {}
function centerBtn4() {}

function init() {
  Cbtn1.addEventListener("click", centerBtn1);
  Cbtn2.addEventListener("click", centerBtn2);
  Cbtn3.addEventListener("click", centerBtn3);
  Cbtn4.addEventListener("click", centerBtn4);
}

init();
