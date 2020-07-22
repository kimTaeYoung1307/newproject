const Hello = document.querySelector(".Hello");
const Helle = document.querySelector(".Helle");

let WW = 0;
function WH() {
  if (WW === 0) {
    Hello.style.transition = "all 1s ease";
    Hello.style.paddingTop = `12vh`;

    Helle.style.transition = "all 1s ease";
    Helle.style.marginTop = `5vh`;
    WW = 1;
  } else {
    Hello.style.transition = "all 0.5s ease";
    Hello.style.paddingTop = `16vh`;

    Helle.style.transition = "all 0.5s ease";
    Helle.style.marginTop = `-0.7vh`;
    WW = 0;
  }
}

function init() {
  setInterval(WH, 1000);
}

init();
