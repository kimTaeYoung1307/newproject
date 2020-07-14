const body = document.querySelector("body");

const IMG_NuMBER = 3;

function paintIMG(imgnumger) {
  const image = new Image();
  image.src = `/img/${imgnumger + 1}.jpg`;
  image.classList.add("bgImg");
  body.prepend(image);
  body.appendChild(image);
}

function genRamdom() {
  const number = Math.floor(Math.random() * IMG_NuMBER);
  return number;
}

function init() {
  const randomNumber = genRamdom();
  paintIMG(randomNumber);
}

init();
