const Cbtn1 = document.querySelector(".Cbtn1");
const Cbtn2 = document.querySelector(".Cbtn2");
const Cbtn3 = document.querySelector(".Cbtn3");
const Cbtn4 = document.querySelector(".Cbtn4");
const Cbtn = document.querySelector(".Cbtn");
const img = document.querySelector(".img");
const imgg = document.querySelector(".imgs1");
const imggg = document.querySelector(".imgs2");
const imgggg = document.querySelector(".imgs3");
const imggggg = document.querySelector(".imgs4");

function init() {
  Cbtn1.addEventListener("click", () => {
    Cbtn1.classList.add("ch");
    Cbtn2.classList.remove("ch");
    Cbtn3.classList.remove("ch");
    Cbtn4.classList.remove("ch");
    imgg.style.display = "block";
    imggg.style.display = "none";
    imgggg.style.display = "none";
    imggggg.style.display = "none";
  });
  Cbtn2.addEventListener("click", () => {
    Cbtn1.classList.remove("ch");
    Cbtn2.classList.add("ch");
    Cbtn3.classList.remove("ch");
    Cbtn4.classList.remove("ch");
    imgg.style.display = "none";
    imggg.style.display = "block";
    imgggg.style.display = "none";
    imggggg.style.display = "none";
  });
  Cbtn3.addEventListener("click", () => {
    Cbtn1.classList.remove("ch");
    Cbtn2.classList.remove("ch");
    Cbtn3.classList.add("ch");
    Cbtn4.classList.remove("ch");
    imgg.style.display = "none";
    imggg.style.display = "none";
    imgggg.style.display = "block";
    imggggg.style.display = "none";
  });
  Cbtn4.addEventListener("click", () => {
    Cbtn1.classList.remove("ch");
    Cbtn2.classList.remove("ch");
    Cbtn3.classList.remove("ch");
    Cbtn4.classList.add("ch");
    imgg.style.display = "none";
    imggg.style.display = "none";
    imgggg.style.display = "none";
    imggggg.style.display = "block";
  });
  Cbtn1.classList.add("ch");
}

init();
