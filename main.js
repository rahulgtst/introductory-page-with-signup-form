"use strict";

const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorBoxes = document.querySelectorAll(".error");
const formControl = document.querySelectorAll(".form-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value.trim() === "") {
    errorBoxes[0].innerHTML = "First Name cannot be empty";
    formControl[0].classList.add("errors");
  } else {
    formControl[0].classList.remove("errors");
  }

  if (lastName.value.trim() === "") {
    errorBoxes[1].innerHTML = "Last Name cannot be empty";
    formControl[1].classList.add("errors");
  } else {
    formControl[1].classList.remove("errors");
  }

  if (email.value.trim() === "") {
    errorBoxes[2].innerHTML = "Email address cannot be empty";
    formControl[2].classList.add("errors");
  } else if (!mailPattern.test(email.value)) {
    errorBoxes[2].innerHTML = "Email address is not valid";
    formControl[2].classList.add("errors");
  } else {
    formControl[2].classList.remove("errors");
  }

  if (password.value.trim() === "") {
    errorBoxes[3].innerHTML = "Password cannot be empty";
    formControl[3].classList.add("errors");
  } else {
    formControl[3].classList.remove("errors");
  }
});
