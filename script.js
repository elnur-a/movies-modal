"use strict";

const showModalBtn = document.querySelectorAll(".show-modal");
const modalList = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

const showModalHandler = (index) => {
  modalList[index].classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalHandler = (index) => {
  modalList[index].classList.add("hidden");
  overlay.classList.add("hidden");
};

showModalBtn.forEach((el, index) => {
  el.addEventListener("click", () => showModalHandler(index));
});

modalList.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    closeModalHandler(index);
  });
});

document.querySelector("body").addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalList.forEach((el, index) => {
      el.addEventListener("click", closeModalHandler(index));
    });
  }
});
