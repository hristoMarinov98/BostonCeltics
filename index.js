"use strict";

const tabs = document.querySelectorAll(".btn-player");
const tabsContainer = document.querySelector(".player-button-container");
const tabsContentInfo = document.querySelectorAll(".player-info");
const tabsContentImg = document.querySelectorAll(".player-img");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let currentSlide = 0;
const maxSlide = slides.length;

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  console.log(clicked);
  if (!clicked) {
    return;
  }
  tabs.forEach((tab) => tab.classList.remove("active-transform"));
  clicked.classList.add("active-transform");

  tabsContentInfo.forEach((tab) => tab.classList.remove("active"));

  document
    .querySelector(`.player-info__${clicked.dataset.tab}`)
    .classList.add("active");

  tabsContentImg.forEach((tab) => tab.classList.remove("active"));
  document
    .querySelector(`.player-img__${clicked.dataset.tab}`)
    .classList.add("active");
});

const goToSlide = function (slideNum) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideNum) * 100}%)`;
  });
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
