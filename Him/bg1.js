const menulogo = document.querySelector(".menu_Logo");

let linearL = 40;
let linearR = 60;

function linear() {
  menulogo.style.background = `rgba(0, 0, 0, 0) 
  linear-gradient(to left, #33ff33 ${linearL}%,
    #ff9933,
    #990099,
    #33ffff ${linearR}%)
      repeat scroll 0% 0% / auto padding-box border-box`;
  console.log(linearR, linearL);
}

function init() {
  linear();
}

init();
