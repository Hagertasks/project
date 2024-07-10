// start nav

let open = document.getElementById("open-id");

let nav = document.querySelector(".all-link");
let key = document.querySelector(".key");
open.addEventListener("click", function () {
  nav.classList.add("active");
});

let close = document.querySelector(".close");
close.addEventListener("click", function () {
  nav.classList.remove("active");
});
// end nav

// for filter slider
let allImages = document.querySelectorAll(".All");
let menu = document.querySelectorAll(".menu p");

menu.forEach((ele) => {
  ele.addEventListener("click", showImages);
  ele.addEventListener("click", menuActive);
});

function menuActive(e) {
  menu.forEach((ele) => ele.classList.remove("active"));
  e.target.classList.add("active");
}

function showImages(e) {
  allImages.forEach((imgs) => (imgs.style.display = "none"));
  document.querySelectorAll(e.target.dataset.menu).forEach((imag) => {
    imag.style.display = "block";
  });
}

// for accordion

let arrows = document.querySelectorAll(".arrow");
let texts = document.querySelectorAll(".accord-p");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", () => {
    let textAccord = document.querySelectorAll(".accord-p");
    console.log(textAccord);
    textAccord[i].classList.toggle("active");
    if (textAccord[i].classList.contains("active")) {
      arrows[i].classList.add("act");
    } else {
      arrows[i].classList.remove("act");
    }
  });
}

// for slider

const sliders = document.querySelectorAll(".div-slider");
let currentIndex = 1;
let next = document.querySelector(".arrow-left");
let previous = document.querySelector(".arrow-right");

const sliderone = document.querySelector(".onee");
const slidertwo = document.querySelector(".twow");
const sliderthree = document.querySelector(".three");

function classes() {
  sliders.forEach((slider, index) => {
    slider.classList.remove("mid", "small");
    if (index === currentIndex) {
      sliderone.style.transform = `translateX(-${120}%)`;
      slidertwo.style.transform = `translateX(-${95}%)`;
      slidertwo.style.backgroundColor = "#EDF1F7";
      sliderone.style.backgroundColor = "#EDF1F7";
      sliderthree.style.transform = `translateX(-${102}%)`;
      sliderthree.style.width = "100%";
      sliderthree.style.padding = "40px";

      slidertwo.style.width = "30%";
      sliderone.style.transform = `translateX(${210}%)`;
      sliderthree.style.backgroundColor = "#FFFFFF";
    } else {
      sliderthree.style.transform = `translateX(-${210}%)`;
      sliderone.style.transform = `translateX(${103}%)`;
      slidertwo.style.transform = `translateX(${102}%)`;

      slidertwo.style.backgroundColor = "#EDF1F7";
      sliderone.style.backgroundColor = "#ffff";
      sliderthree.style.backgroundColor = "#EDF1F7";
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliders.length;
  classes();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
  classes();
}

next.addEventListener("click", nextSlide);
previous.addEventListener("click", prevSlide);
