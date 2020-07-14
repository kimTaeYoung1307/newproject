const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
const Smclock = document.querySelector(".js-Sclock");
let hours1;
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${second < 10 ? `0${second}` : second}`;
}

function SgetTime() {
  const date1 = new Date();
  const minutes1 = date1.getMinutes();
  const Hour = date1.getHours();

  if (Hour > 12) {
    hours1 = Hour - 12;
  } else {
    hours1 = Hour;
  }
  if (Hour < 12) {
    Smclock.innerText = `${hours1 < 10 ? `0${hours1}` : hours1}:${
      minutes1 < 10 ? `0${minutes1}` : minutes1
    } AM`;
  } else {
    Smclock.innerText = `${hours1 < 10 ? `0${hours1}` : hours1}:${
      minutes1 < 10 ? `0${minutes1}` : minutes1
    } PM`;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);

  SgetTime();
  setInterval(SgetTime, 1000);
}

init();
